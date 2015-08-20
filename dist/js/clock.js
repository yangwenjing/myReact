/**
 * Created by ywj on 15/8/20.
 */

var Clock = React.createClass({displayName: "Clock",
  componentWillMount: function() {
    var keyframes = document.createElement('style');
    var date = new Date();
    var second = date.getSeconds();
    var minutes = date.getMinutes()+second/60;
    var hour = date.getHours()%12+minutes/60;
    keyframes.innerHTML = "\
    @keyframes hour {\
        from {\
            transform: rotateZ("+(hour*30-180)+"deg);\
        }\
        to {\
            transform: rotateZ("+(hour*30+180)+"360deg);\
        }\
    }\
    @keyframes minute {\
        from {\
            transform: rotateZ("+(minutes*6-180)+"deg);\
        }\
        to {\
            transform: rotateZ("+(minutes*6-180)+"deg);\
        }\
    }\
    @keyframes second {\
        from {\
            transform: rotateZ("+(second*6-180)+"deg);\
        }\
        to {\
            transform: rotateZ("+(second*6+180)+"deg);\
        }\
    }";

    var head = document.getElementsByTagName("head");
    head[0].appendChild(keyframes);
  },
  render: function() {
    return (
      React.createElement("div", {className: "clock"}, 
        React.createElement("div", {className: "plate"}, 
          React.createElement("div", {className: "time"}), 
          React.createElement("div", {className: "time"}), 
          React.createElement("div", {className: "time"}), 
          React.createElement("div", {className: "time"}), 
          React.createElement("div", {className: "time"}), 
          React.createElement("div", {className: "time"}), 
          React.createElement("div", {className: "time"}), 
          React.createElement("div", {className: "time"}), 
          React.createElement("div", {className: "time"}), 
          React.createElement("div", {className: "time"}), 
          React.createElement("div", {className: "time"}), 
          React.createElement("div", {className: "time"}), 
          React.createElement("div", {className: "hour"}), 
          React.createElement("div", {className: "minute"}), 
          React.createElement("div", {className: "second"}), 
          React.createElement("div", {className: "nail"})
        )
      )
    );

  }
});

React.render(
React.createElement(Clock, null),
  document.getElementById("mountClock")
);