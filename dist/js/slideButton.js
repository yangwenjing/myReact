/**
 * Created by ywj on 15/8/20.
 */
var SlideButton = React.createClass({displayName: "SlideButton",
  render: function () {
    return (
      React.createElement("input", {className: "slideButton-"+this.props.size, type: "button"})
    );
  }
});

React.render(
  React.createElement("div", null, 
React.createElement(SlideButton, {size: "lg"}), 
  React.createElement(SlideButton, {size: "sm"}), 
  React.createElement(SlideButton, {size: "md"})
  ),
  document.getElementById("mountSlideButton")
);