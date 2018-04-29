import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import StarBorder from "material-ui/svg-icons/toggle/star-border";
import { connect } from "react-redux";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    margin: 50
  },
  gridList: {
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto",
    margin: 50
  },
  titleStyle: {
    color: "white"
  }
};

class ProductsList extends PureComponent {
  static propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired
      })
    ).isRequired
  };

  render() {
    const { products } = this.props;
    return (
      <div style={styles.root}>
        <GridList style={styles.gridList} cols={2.2}>
          {products.map(product => (
            <GridTile
              key={product.id}
              title={product.name}
              actionIcon={
                <IconButton>
                  <StarBorder color="dark grey" />
                </IconButton>
              }
              titleStyle={styles.titleStyle}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            >
              <img style={{heigth: 500, width: 250}}src={product.image} />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}
const mapStateToProps = function(state) {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(ProductsList);
