/**
 * Created by ywj on 15/8/20.
 */
var SlideButton = React.createClass({displayName: "SlideButton",
  render: function () {
    return (
      React.createElement("button", {className: "slideButton-"+this.props.size, name: "button"}, this.props.value)
    );
  }
});

React.render(
  React.createElement("div", null, 
React.createElement(SlideButton, {size: "lg", value: "大"}), 
  React.createElement(SlideButton, {size: "sm", value: "中"}), 
  React.createElement(SlideButton, {size: "md", value: "小"})
  ),
  document.getElementById("mountSlideButton")
);