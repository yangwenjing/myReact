/**
 * Created by ywj on 15/8/20.
 */
var SlideButton = React.createClass({
  render: function () {
    return (
      <button className={"slideButton-"+this.props.size} name="button" >{this.props.value}</button>
    );
  }
});

React.render(
  <div>
<SlideButton size="lg" value="大"/>
  <SlideButton size="sm" value="中"/>
  <SlideButton size="md" value="小"/>
  </div>,
  document.getElementById("mountSlideButton")
);