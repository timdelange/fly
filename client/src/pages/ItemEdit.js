// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { DateTimePicker } from "material-ui-pickers";

// Custom Actions


// START IMPORT ACTIONS
import ItemActions from "../redux/actions/ItemActions";

// END IMPORT ACTIONS

/** APIs

* actionsItem.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsItem.create
*	@description CRUD ACTION create
*
* actionsItem.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsUser.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class ItemEdit extends Component {
  // Init item
  constructor(props) {
    super(props);
    this.state = {
      item: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsItem.loadItem(this.props.match.params.id);
    }
    
  }

  // Insert props item in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      item: props.item
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.item._id) {
      this.props.actionsItem.saveItem(this.state.item).then(data => {
        this.props.history.push("/");
      });
    } else {
      this.props.actionsItem.createItem(this.state.item).then(data => {
        this.props.history.push("/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Item Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="category"
            label="Category"
            value={this.state.item.category || ""}
            onChange={Utils.handleChange.bind(this, "item")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.item.category && this.state.item.category === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="content"
            label="Content"
            value={this.state.item.content || ""}
            onChange={Utils.handleChange.bind(this, "item")}
            margin="normal"
            fullWidth
          />
          
          <DateTimePicker
            id="created"
            label="Created"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.item.created
                ? new Date(this.state.item.created)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "item", "created")}
            fullWidth
            autoOk
            disableFuture
          />
          
          
          <TextField
            id="downloads"
            label="Downloads"
            value={this.state.item.downloads || ""}
            onChange={Utils.handleChange.bind(this, "item")}
            type="number"
            type="decimal"
            margin="normal"
            fullWidth
          />
          
          <DateTimePicker
            id="modified"
            label="Modified"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.item.modified
                ? new Date(this.state.item.modified)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "item", "modified")}
            fullWidth
            autoOk
            disableFuture
            required
            {...(!this.state.item.modified && this.state.item.modified === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="name"
            label="Name"
            value={this.state.item.name || ""}
            onChange={Utils.handleChange.bind(this, "item")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.item.name && this.state.item.name === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="notes"
            label="Notes"
            value={this.state.item.notes || ""}
            onChange={Utils.handleChange.bind(this, "item")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="path"
            label="Path"
            value={this.state.item.path || ""}
            onChange={Utils.handleChange.bind(this, "item")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="platform"
            label="Platform"
            value={this.state.item.platform || ""}
            onChange={Utils.handleChange.bind(this, "item")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.item.platform && this.state.item.platform === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="type"
            label="Type"
            value={this.state.item.type || ""}
            onChange={Utils.handleChange.bind(this, "item")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.item.type && this.state.item.type === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="user"
            label="User"
            value={this.state.item.user || ""}
            onChange={Utils.handleChange.bind(this, "item")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.item.user && this.state.item.user === ""
              ? { error: true }
              : {})}
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsItem: bindActionCreators(ItemActions, dispatch),
  };
};

// Validate types
ItemEdit.propTypes = { 
  actionsItem: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    item: state.ItemEditReducer.item
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemEdit);
