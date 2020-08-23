import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text } from 'react-native'
import { Paper, Subtitle, BodyText, Caption } from "material-bread";

import colors from '../constants/colors'

function Block({ block }) {
  return (
    <View style={styles.container}>
      <Text style={styles.blockNumber}>{block.id.padStart(3, '0')}</Text>
      <Text>{block.attributes.data}</Text>
    </View>
  )
}

Block.propTypes = {
  block: PropTypes.shape({
    id: PropTypes.string.isRequired,
    attributes: PropTypes.object.isRequired,
    type: PropTypes.oneOf(['blocks']),
  })
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    marginBottom: 5,
  },
  blockNumber: {
    color: colors.primary,
    fontSize: 10,
    marginBottom: 10,
  }
})

export default Block
