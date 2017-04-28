<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<html lang="en">
<c:set var="contextPath" value="${pageContext.request.contextPath}"/>

<head>
    <title>PsychSpace</title>
    <%--Google sign in--%>
    <meta name="google-signin-client_id"
          content="268071146674-5jjt494svk74rt4jb5mu4pik8503qbph.apps.googleusercontent.com">
    <script src="https://apis.google.com/js/platform.js" async defer></script>
    <%--Google fonts--%>
    <link href='http://fonts.googleapis.com/css?family=Open Sans' rel='stylesheet'>
    <link href='http://fonts.googleapis.com/css?family=Maven Pro' rel='stylesheet'>
    <%--jQuery--%>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
    <%--Bootstrap--%>
    <link href="http://netdna.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/css/bootstrap-combined.min.css"
          rel="stylesheet"/>
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
    <%--Customized--%>
    <script src="${contextPath}/resources/js/scrollreveal.js"></script>
    <script src="${contextPath}/resources/js/navbar.js"></script>
    <link href='${contextPath}/resources/css/animations.css' rel='stylesheet'>
    <link href='${contextPath}/resources/css/navbar.css' rel='stylesheet'>
    <link href='${contextPath}/resources/css/ps-row-col.css' rel='stylesheet'>
    <link href='${contextPath}/resources/css/style.css' rel='stylesheet'>
</head>

<body>
<div classs="navbar-wrapper">
    <%@include file="navbar.html" %>
</div>

<header class="ps-feature-header">
    <div class="ps-feature-content">
        <div class="row ps-feature">
            <div class="ps-feature-info">
                <!-- Course Title -->
                <h1>Course Title
                    <hr>
                </h1>
                <br>
            </div>
        </div>
        <div class="row ps-text-content">
            <div class="col-lg-2 ps-col-left">
                <div class="ps-well">
                    <!-- Learn Sidebar -->
                    <%@include file="learn-sidebar.html" %>
                </div>
            </div>
            <div class="col-lg-10 ps-col-right">
                <!-- Start Content -->
                <div class="col-lg">
                    <div class="ps-well">
                        <h2>[Goal Name] - Daily Evaluation for [Date]
                            <hr>
                        </h2>
                        <br>
                        <br>
                        <!-- Form Start -->
                        <form class="ps-all-questions">
                            <!-- Question Start -->
                            <div class="ps-question">
                                <!-- Question Text -->
                                <h3>How many [unit] did you complete today?</h3>
                                <div class="ps-answers">
                                    <!-- Answer Start -->
                                    <div class="ps-answer">
                                        <span><input class="ps-number-input" type="number" placeholder="Number">
                                    [unit] out of [value] [unit]</span>
                                    </div>
                                    <!-- Answer End-->
                                </div>
                            </div>
                            <!-- Question End -->
                            <!-- Question Start -->
                            <div class="ps-question ps-optional-response">
                                <!-- Question Text -->
                                <h3>What are your feelings?</h3>
                                <div class="ps-answers">
                                    <!-- Answer Start -->
                                    <div class="ps-answer">
                                        <textarea class="ps-text-area" rows="4" placeholder="Feelings..."></textarea>
                                    </div>
                                    <!-- Answer End-->
                                </div>
                            </div>
                            <!-- Question End -->
                            <div class="center">
                                <!-- Submit Survey Button -->
                                <button type="button" class="button" id="btn-submit-survey">
                                    <span>Submit Responses</span></button>
                            </div>
                        </form>
                        <!-- Form End -->
                    </div>
                </div>
                <!-- End Content -->
            </div>
        </div>
    </div>
</header>


<%@include file="footer.html" %>
<script src="${contextPath}/resources/js/animations.js"></script>
</body>

</html>