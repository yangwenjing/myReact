/**
 * Created by ywj on 15/8/20.
 */
var SlideButton = React.createClass({
  render: function () {
    return (
      <input className={"slideButton-"+this.props.size} type="button" />
    );
  }
});

React.render(
  <div>
<SlideButton size="lg" />
  <SlideButton size="sm" />
  <SlideButton size="md"/>
  </div>,
  document.getElementById("mountSlideButton")
);