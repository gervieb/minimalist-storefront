import React, { Component } from "react";
import { optionSelected } from "../utils/productUtils";
import { SelectedText, SelectedColor } from "./CartAttributes.style";

class CartAttributes extends Component {
  render() {
    const { el, item, changeOption, attri } = this.props;
    return (
      <span>
        {attri.type !== "swatch" ? (
          <SelectedText
            isSelected={optionSelected(item.variants, el.value, attri.name)}
            onClick={() => changeOption(attri.name, el.value, item.varId)}
          >
            {el.value}
          </SelectedText>
        ) : (
          <SelectedColor
            isSelected={optionSelected(item.variants, el.value, attri.name)}
            style={{ backgroundColor: el.value }}
            onClick={() => changeOption(attri.name, el.value, item.varId)}
          ></SelectedColor>
        )}
      </span>
    );
  }
}

export default CartAttributes;
