import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import Divider from "material-ui/Divider";
import FlatButton from "material-ui/FlatButton";
import Paper from "material-ui/Paper";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import { connect } from "react-redux";

const style = {
  height: "150",
  width: "150",
  margin: "auto",
  display: "flex"
};

class ProductDetails extends PureComponent {
  static propTypes = {
    product: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired
      })
    ).isRequired
  };

  render() {
    const { product } = this.props;
    console.log(product);
    return (
      <div>
        <Paper style={style} zDepth={1}>
          {product.map(p => (
            <Card style={{ display: "inline-block", margin: 5 }}>
              <FloatingActionButton
                mini={true}
                disabled={true}
                style={{ marginLeft: 300 }}
              >
                <ContentAdd />
              </FloatingActionButton>
              <CardMedia
                style={{ height: 350 }}
                overlay={<CardTitle title={`${p.name}`} />}
              >
                <img src={p.image} style={{ heigth: 300, width: 300 }} />
              </CardMedia>
              <CardText style={{ textAlign: "left" }}>
                <p>
                  This stunning {p.name} is only &euro; {`${p.price}`}
                </p>
                <p>{`${p.description}`}</p>
              </CardText>

              <Divider />
            </Card>
          ))}
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    product: state.product
  };
};

export default connect(mapStateToProps)(ProductDetails);
