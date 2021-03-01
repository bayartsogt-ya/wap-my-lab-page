# State Management Quiz
* [pdf link](http://mumstudents.org/cs472/2021-03-BL/quiz/State_Management_Quiz.pdf)


1. Can post requests be bookmarked? What are the problems?
    > No. Because POST request is for safer way to transfer information.
2. What is the purpose of request dispatching?
    > Using another resource for the current request. It can be jsp, html, etc.
3. What is the difference between redirect and request dispatch?
    > Redirecting requires the browser to load again while request dispatcher just direct it to another file.
4. What is an attribute ?
    > Attribute is additional information on the current state.
5. What is the difference between attributes and parameters?
    > attributes stays in memory longer than parameter.
6. What are dangers of using attributes?
    > Information can be leaked.
7. What does it mean to say that http is stateless? Give an example of a stateful protocol.
    > "http is stateless" means you cannot save dynamic information there. But it can be forced to be stateful using session, cookie and etc.
8. Give 5 different methods for maintaining state information (count each attribute scope as one method).
    > 1. Hidden Form Field 2. Session 3. Cookie 4. Application/context 5. Permanent storage (DB)
9. How long does a session last?
    > Until the browser closed or session max life time exceeded or user nulled it.
10. What is a cookie, and how long does a cookie last?
    > Cookie is similar to session but can be lasted even after browser closed. It can be nulled or max life time exceeded
11. What is the purpose of URL rewriting?
    > For redirect or using different attributes for GET request
12. Why does the request attribute report ‘null’ for the maintaining state demo?
    > It is default.