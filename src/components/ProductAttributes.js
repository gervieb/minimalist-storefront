import React, { Component } from "react";
import { optionSelected } from "../utils/productUtils";
import {
  ProductOptions,
  AttributeWrapper,
  SelectedText,
  SelectedColor,
} from "./ProductAttributes.style";
import { Label } from "../containers/Product.style";

class ProductAttributes extends Component {
  render() {
    const { attri, handleSelect, variants } = this.props;

    return (
      <ProductOptions>
        <Label>{attri.name.toUpperCase()}:</Label>
        <AttributeWrapper>
          {attri.items.map((item) => (
            <React.Fragment key={item.id}>
              {attri.type !== "swatch" ? (
                <SelectedText
                  isItemSelected={optionSelected(
                    variants,
                    item.value,
                    attri.name
                  )}
                  onClick={() => handleSelect(attri, item)}
                >
                  {item.value}
                </SelectedText>
              ) : (
                <SelectedColor
                  isColorSelected={optionSelected(
                    variants,
                    item.value,
                    attri.name
                  )}
                  onClick={() => handleSelect(attri, item)}
                  value={item.value}
                ></SelectedColor>
              )}
            </React.Fragment>
          ))}
        </AttributeWrapper>
      </ProductOptions>
    );
  }
}

export default ProductAttributes;
