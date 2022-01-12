import React from "react";

export default function Popup(props) {
    return (
        <div class="modal fade" id={props.id}
            tabindex="-1" aria-labelledby={props.aria_labelledby} aria-hidden="true">
            {props.children}
        </div>
    )
}