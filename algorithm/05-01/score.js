function grade(score) {
    if (score < 0 || score > 100) {
        return "잘못된 점수입니다."
    }

    else if (score >= 90) {
        return "A등급"
    }
    else if (score >= 80) {
        return "B등급"
    }

    else if (score >= 70) {
        return "C등급"
    }

    else if (score >= 60) {
        return "D등급"
    }
    else {
        return "F등급"
    }
}
grade(105)
grade(-10)