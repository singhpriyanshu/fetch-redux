import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "./FetchProducts";

class ProductList extends React.Component {


  componentDidMount() {
  this.props.dispatch(fetchProducts());
  }

  render() {
    const { error, loading, users } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading data...</div>;
    }

    return (
        <div>
      <ul>
        {users.map(users =>
        <li key={users.id}>
            {users.name}
             email={users.email} <br/>
             phone={users.phone} 
         </li>)}
      </ul>
      </div>

    );
  }
}

const mapStateToProps = state => ({
    users: state.users.users,
  loading: state.users.loading,
  error: state.users.error
});

export default connect(mapStateToProps)(ProductList);