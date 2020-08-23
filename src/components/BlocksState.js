import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { Paper, Subtitle, BodyText, Caption } from "material-bread";
import { BLOCKS_STATE_LOADING, BLOCKS_STATE_EMPTY } from '../constants/states'
import colors from '../constants/colors'

function BlocksState({ state }) {
  let State = <BodyText style={{ textAlign: 'center', color: colors.danger }} type={1} text={state} />
  if (state === BLOCKS_STATE_LOADING) {
    State = <ActivityIndicator color={colors.primary} size="large" />
  } else if (state === BLOCKS_STATE_EMPTY) {
    State = <BodyText style={{ textAlign: 'center' }} type={1} text={"Empty"} />
  }

  return (
    <View style={{ paddingVertical: 10 }}>
      { State }
    </View>
  )
}

export default BlocksState
