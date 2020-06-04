import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default class ScrollToTop extends React.Component {
    state = {
        is_visible: false,
    };

    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function (e) {
            scrollComponent.toggleVisibility();
        });
    }

    toggleVisibility = () =>
        this.setState({ is_visible: window.pageYOffset > 300 ? true : false });

    scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    render() {
        const { is_visible } = this.state;
        return (
            <div className="scroll-to-top">
                {is_visible && (
                    <button onClick={this.scrollToTop}>
                        <FontAwesomeIcon icon={faChevronUp} size="lg" />
                    </button>
                )}
            </div>
        );
    }
}