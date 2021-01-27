import React, { Component } from "react";
import Description from "./Description";
import Subscribe from "./Subscribe";
import xmark from "../images/x-mark.svg";
import check from "../images/check-mark.svg";
import "../styles/ComingSoon.css";

class ComingSoon extends Component {
  state = {
    description: {
      text:
        "Sign up."
    },
    subscribe: {
      placeholder: "Enter Email Address",
      buttonText: "Submit"
    },
    notification: {
      src: "",
      alt: "",
      message: "",
      visible: false,
      level: ""
    }
  };

  configureNotification = obj => {
    const notification = { ...this.state.notification };
    notification.message = obj.body.msg;
    if (obj.status === 200) {
      notification.src = check
      notification.alt = "Check Mark"
      notification.level = "success"
    } else {
      notification.src = xmark
      notification.alt = "X Mark"
      notification.level = "error"
    }
    this.setState({ notification });
  };

  showNotification = () => {
    const notification = { ...this.state.notification };
    notification.visible = true;
    this.setState({ notification }, () => {
      setTimeout(() => {
        notification.visible = false;
        this.setState({ notification });
      }, 3000);
    });
  };

  render() {
    const {
      description,
      subscribe,
      notification
    } = this.state;

    return (
      <div className="background">
        <Description
          text={description.text}
          src={notification.src}
          alt={notification.alt}
          message={notification.message}
          visible={notification.visible}
          level={notification.level}
        />
        <Subscribe
          placeholder={subscribe.placeholder}
          buttonText={subscribe.buttonText}
          configureNotification={this.configureNotification}
          showNotification={this.showNotification}
        />
      </div>
    );
  }
}

export default ComingSoon;
