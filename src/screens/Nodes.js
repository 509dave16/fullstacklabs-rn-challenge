import React from "react";
import PropTypes from "prop-types";
import { ScrollView, View, StyleSheet } from "react-native";
import { Heading } from "material-bread";
import { SafeAreaView } from 'react-native-safe-area-context';
import Node from "../components/Node";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/nodes";

export class Nodes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedNodeURL: null
    };
    this.toggleNodeExpanded = this.toggleNodeExpanded.bind(this);
  }

  componentDidMount() {
    this.props.actions.checkNodeStatuses(this.props.nodes.list);
  }

  toggleNodeExpanded(node) {
    this.setState({
      expandedNodeURL: node.url === this.state.expandedNodeURL ? null : node.url
    });
  }

  render() {
    const { nodes } = this.props;
    return (
      <SafeAreaView>
        <Heading style={styles.heading} type={4}>
          Nodes
        </Heading>
        <ScrollView>
          {nodes.list.map(node => (
            <Node
              node={node}
              key={node.url}
              expanded={node.url === this.state.expandedNodeURL}
              toggleNodeExpanded={this.toggleNodeExpanded}
            />
          ))}
          <View style={styles.paddingBump} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

Nodes.propTypes = {
  actions: PropTypes.object.isRequired,
  nodes: PropTypes.object.isRequired
};
const styles = StyleSheet.create({
  heading: { marginLeft: 30, marginTop: 45, marginBottom: 15, fontWeight: "700" },
  paddingBump: { paddingBottom: 80 }
});

function mapStateToProps(state) {
  return {
    nodes: state.nodes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nodes);
