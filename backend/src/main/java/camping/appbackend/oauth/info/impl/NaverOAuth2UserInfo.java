package camping.appbackend.oauth.info.impl;

import camping.appbackend.oauth.info.OAuth2UserInfo;
import java.util.Map;

public class NaverOAuth2UserInfo extends OAuth2UserInfo {

    public NaverOAuth2UserInfo(Map<String, Object> attributes) {
        super(attributes);
    }

    private String getResponseAttributeAsString(String attributeName) {
        Map<String, Object> response = (Map<String, Object>) attributes.get("response");
        if (response == null) {
            return null;
        }
        return (String) response.get(attributeName);
    }

    @Override
    public String getEmail() {
        return getResponseAttributeAsString("email");
    }

    @Override
    public String getNickname() {
        return getResponseAttributeAsString("nickname");
    }

    @Override
    public String getBirthDay() {
        return getResponseAttributeAsString("birthday"); // MM-DD 형식
    }

    @Override
    public String getBirthYear() {
        return getResponseAttributeAsString("birthyear");
    }

    @Override
    public String getPhoneNumber() {
        return getResponseAttributeAsString("mobile");  // 010-0000-0000 형식
    }

    @Override
    public String getName() {
        return getResponseAttributeAsString("name");
    }

    @Override
    public String getProfileImage() {
        return getResponseAttributeAsString("profile_image");
    }
}

