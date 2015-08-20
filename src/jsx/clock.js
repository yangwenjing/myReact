/**
 * Created by ywj on 15/8/20.
 */

var Clock = React.createClass({
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
      <div className="clock">
        <div className="plate">
          <div className="time"></div>
          <div className="time"></div>
          <div className="time"></div>
          <div className="time"></div>
          <div className="time"></div>
          <div className="time"></div>
          <div className="time"></div>
          <div className="time"></div>
          <div className="time"></div>
          <div className="time"></div>
          <div className="time"></div>
          <div className="time"></div>
          <div className="hour"></div>
          <div className="minute"></div>
          <div className="second"></div>
          <div className="nail"></div>
        </div>
      </div>
    );

  }
});

React.render(
<Clock />,
  document.getElementById("mountClock")
);