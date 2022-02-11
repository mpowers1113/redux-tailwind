import React from 'react';
import { connect } from 'react-redux';

class UserDetails extends React.Component {
  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    } else {
      return (
        <div
          key={user.address}
          className="flex divide-y-2 divide-stone-500 divide-solid flex-col justify-center items-center">
          <h1 className="text-md">{user.name}</h1>
          <h1>{user.address.street}</h1>
          <h1>{user.address.city}</h1>
          <h1>{user.website}</h1>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.user.find((user) => user.id === ownProps.id) };
};

export default connect(mapStateToProps)(UserDetails);
