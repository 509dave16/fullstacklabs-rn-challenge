import React from 'react'
import { Paper, Subtitle, BodyText, Caption } from "material-bread";
import BlocksState from './BlocksState'
import Block from './Block'

import { BLOCKS_STATE_LOADING, BLOCKS_STATE_EMPTY, BLOCKS_STATE_LOADED } from '../constants/states'

class Blocks extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      blocksState: BLOCKS_STATE_LOADING,
      blocks: [],
    }
  }

  componentDidMount() {
    this.fetchBlocks()
  }

  async fetchBlocks() {
    const { node } = this.props
    try {
      const res = await fetch(`${node.url}/api/v1/blocks`);

      if (res.status >= 400) {
        this.setState({ blocksState: res.status })
      }

      const json = await res.json();
      console.log('<<<fetchBlocks - json', json);
      if (json && json?.data?.length) {
        this.setState({ blocks: json.data, blocksState: BLOCKS_STATE_LOADED})
      } else {
        this.setState({ blocksState: BLOCKS_STATE_EMPTY });
      }
    } catch (err) {
      this.setState({ blocksState: err.message });
    }
  }

  render() {
    const { blocksState, blocks } = this.state
    if (blocksState !== 'loaded') {
      return <BlocksState state={blocksState} />
    }
    return blocks.map(block => <Block key={block.id} block={block} />)
  }
}

export default Blocks
