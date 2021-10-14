import React from "react";
import Pikaday from "pikaday";
import moment from "moment";

class DueDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dueTime: props.card.dueDate,
      dueDate: props.card.dueDate,
    };
  }

  componentDidMount() {
    const date = this.state.dueDate ? this.state.dueDate : null;
    this.picker = new Pikaday({
      field: document.querySelector(".datepicker-select-date input"),
      bound: false,
      container: document.getElementById("calendar-widget"),
      firstDay: 1,
      yearRange: 10,
      defaultDate: date
        ? moment(date).toDate()
        : moment().add(1, "day").toDate(),
      setDefaultDate: true,
      format: "M/D/YYYY",
      i18n: {
        previousMonth: "Prev",
        nextMonth: "Next",
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        weekdays: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        weekdaysShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      },
      toString(date, format) {
        return moment(date).format(format);
      },
    });
    this.picker.show();
  }

  handleCloseClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.handleDueDate();
  }

  formatTime(time) {
    time = new Date(time);
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const timestamp = Intl.DateTimeFormat("en-US", options).format(time);
    console.log(timestamp);
    return timestamp.replace(",", "");
  }

  render() {
    console.log(this.state.dueDate);
    console.log(this.state.dueTime);
    return (
      <div className="popover due-date">
        <header>
          <span>Change due date</span>
          <a
            href="#"
            className="icon-sm icon-close"
            onClick={this.handleCloseClick.bind(this)}
          ></a>
        </header>
        <div className="content">
          <form>
            <div className="datepicker-select">
              <div className="datepicker-select-date">
                <label>
                  Date
                  <input type="text" placeholder="Enter date" autoFocus />
                </label>
              </div>
              <div className="datepicker-select-time">
                <label>
                  Time
                  <input
                    type="text"
                    placeholder="Enter time"
                    value={this.state.dueTime}
                    onChange={(e) => {
                      console.log(this.formatTime(e.target.value));
                      // console.log(this.state.dueTime);
                      this.setState({
                        dueTime: e.target.value,
                      });
                    }}
                  />
                </label>
              </div>
              <div id="calendar-widget"></div>
            </div>
            <button className="button" type="submit">
              Save
            </button>
            <button className="button red-button" type="reset">
              Remove
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default DueDate;
