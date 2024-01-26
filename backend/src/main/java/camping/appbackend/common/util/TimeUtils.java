package camping.appbackend.common.util;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;

public class TimeUtils {

    /**
     * 현재 날짜에서 지정된 일 수를 더한 날짜를 반환합니다.
     *
     * @param format    날짜 형식 (예: "yyyyMMdd", "yyyy-MM-dd" 등)
     * @param daysToAdd 더할 일 수 (음수일 경우 과거 날짜로 이동)
     * @return 조정된 날짜 문자열
     */
    public static String adjustDate(String format, int daysToAdd) {
        LocalDate currentDate = LocalDate.now();
        LocalDate adjustedDate = currentDate.plus(daysToAdd, ChronoUnit.DAYS);
        return adjustedDate.format(DateTimeFormatter.ofPattern(format));
    }

    /**
     * @return 해당일의 주말 or 평일 리턴
     */
    public static String determineDayType(LocalDate date) {
        DayOfWeek dayOfWeek = date.getDayOfWeek();
        return dayOfWeek == DayOfWeek.SATURDAY || dayOfWeek == DayOfWeek.SUNDAY ? "주말" : "평일";
    }

    /**
     * @return 해당일의 계절 리턴
     */
    public static String determineSeason(LocalDate date) {
        return switch (date.getMonth()) {
            case MARCH, APRIL, MAY -> "봄";
            case JUNE, JULY, AUGUST -> "여름";
            case SEPTEMBER, OCTOBER, NOVEMBER -> "가을";
            case DECEMBER, JANUARY, FEBRUARY -> "겨울";
        };
    }
}