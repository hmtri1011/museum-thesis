import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAllItemSuccess } from '../actions/item'
import Item from '../components/Item'

@connect(
  state => ({
    items: state.items
  }),
  dispatch => ({
    getAll: bindActionCreators(getAllItemSuccess, dispatch)
  })
)
class ListItem extends Component {
  static PropTypes = {
    itemAction: PropTypes.object.isRequired,
    items: PropTypes.object
  }

  componentDidMount() {
    const { getAll } = this.props
    getAll()
  }

  render() {
    const { items } = this.props
    const ListItem = items.get('ListItem')
    return (
      <ul className="row">
        {ListItem.length > 0
          ? ListItem.map(item => {
              const category =
                (item.category && item.category.name) || 'Default'
              return (
                <li className="col-sm-4" key={item._id}>
                  <Item
                    category={category}
                    name={item.name}
                    summary={item.summary}
                    image={item.image}
                  />
                </li>
              )
            })
          : null}
      </ul>
    )
  }
}

export default ListItem
