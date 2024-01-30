package camping.appbackend.config.security;

import camping.appbackend.config.properties.AppProperties;
import camping.appbackend.config.properties.CorsProperties;
import camping.appbackend.domain.user.repository.UserRefreshTokenRepository;
import camping.appbackend.oauth.domain.repository.OAuth2AuthorizationRequestBasedOnCookieRepository;
import camping.appbackend.oauth.exception.RestAuthenticationEntryPoint;
import camping.appbackend.oauth.filter.TokenAuthenticationFilter;
import camping.appbackend.oauth.handler.OAuth2AuthenticationFailureHandler;
import camping.appbackend.oauth.handler.OAuth2AuthenticationSuccessHandler;
import camping.appbackend.oauth.handler.TokenAccessDeniedHandler;
import camping.appbackend.oauth.service.CustomOAuth2UserService;
import camping.appbackend.oauth.token.AuthTokenProvider;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@RequiredArgsConstructor
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
public class SecurityConfig {

    private final CorsProperties corsProperties;
    private final AppProperties appProperties;
    private final AuthTokenProvider tokenProvider;
    private final CustomOAuth2UserService oAuth2UserService;
    private final TokenAccessDeniedHandler tokenAccessDeniedHandler;
    private final UserRefreshTokenRepository userRefreshTokenRepository;


    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .cors().and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
                .csrf().disable()
                .httpBasic().disable()
                .formLogin().disable()
                .exceptionHandling()
                .authenticationEntryPoint(new RestAuthenticationEntryPoint())
                .accessDeniedHandler(tokenAccessDeniedHandler)
                .and()
                .authorizeRequests()
                .antMatchers("/**").permitAll() // 일단 임시로 다 열어둠..
                .antMatchers("/swagger-resources/**").permitAll()
                .anyRequest().authenticated();

        // oauth2
        http
                .oauth2Login()
                .authorizationEndpoint().baseUri("/oauth2/authorization")
                .authorizationRequestRepository(oAuth2AuthorizationRequestbasedOnCookieRepository())
                .and()
                .redirectionEndpoint().baseUri("/*/oauth2/code/*")
                .and()
                .userInfoEndpoint() //Oauth2 로그인 성공 이후 사용자 정보를 가져올때의 설정 담당
                .userService(oAuth2UserService) // 소셜 로그인 성공 시 후속조치를 진행할 UserService인터페이스의 구현체 등록
                .and()
                .successHandler(oAuth2AuthenticationSuccessHandler())
                .failureHandler(oAuth2AuthenticationFailureHandler());

        http.addFilterBefore(tokenAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

    //토큰 필터 설정
    @Bean
    public TokenAuthenticationFilter tokenAuthenticationFilter() {
        return new TokenAuthenticationFilter(tokenProvider);
    }

    //Oauth 인증 실패 핸들러
    @Bean
    public OAuth2AuthenticationFailureHandler oAuth2AuthenticationFailureHandler() {
        return new OAuth2AuthenticationFailureHandler(oAuth2AuthorizationRequestbasedOnCookieRepository());
    }

    //Oauth 인증 성공 핸들러
    @Bean
    public OAuth2AuthenticationSuccessHandler oAuth2AuthenticationSuccessHandler() {
        return new OAuth2AuthenticationSuccessHandler(
                tokenProvider,
                appProperties,
                userRefreshTokenRepository,
                oAuth2AuthorizationRequestbasedOnCookieRepository()
        );
    }

    //쿠키 기반 인가 repository, 인가 응답을 연계 하고 검증할 때 사용
    @Bean
    public OAuth2AuthorizationRequestBasedOnCookieRepository oAuth2AuthorizationRequestbasedOnCookieRepository() {
        return new OAuth2AuthorizationRequestBasedOnCookieRepository();
    }

    //Security 설정 시, 사용할 인코더 설정
    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public UrlBasedCorsConfigurationSource corsConfigurationSource() {
        UrlBasedCorsConfigurationSource corsConfigSource = new UrlBasedCorsConfigurationSource();

        CorsConfiguration corsConfig = new CorsConfiguration();
        corsConfig.setAllowedHeaders(List.of("*"));
        corsConfig.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"));
        corsConfig.setAllowedOrigins(
                List.of("http://localhost:3000", "https://localhost:3001", "https://www.campinggo.store:3000",
                        "https://www.api.campinggo.store:3000"));
        corsConfig.setExposedHeaders(List.of("*"));
        corsConfig.setAllowCredentials(true);
        corsConfig.setMaxAge(3600L);

        corsConfigSource.registerCorsConfiguration("/**", corsConfig);
        return corsConfigSource;
    }
}
