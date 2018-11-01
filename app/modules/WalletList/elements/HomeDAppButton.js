import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react/native'
import AppStyle from '../../../commons/AppStyle'
import MainStore from '../../../AppStores/MainStore'

@observer
export default class HomeDAppButton extends Component {
  static propTypes = {
    onPress: PropTypes.func
  }

  static defaultProps = {
    onPress: () => { }
  }

  render() {
    const { onPress } = this.props
    const { isShowDappButton } = MainStore.appState
    if (isShowDappButton) {
      return (
        <TouchableOpacity
          style={styles.browserButton}
          onPress={onPress}
        >
          <Text style={{ color: AppStyle.mainColor, fontFamily: 'OpenSans-Semibold' }}>DApps Browser</Text>
        </TouchableOpacity>
      )
    }
    return null
  }
}

const styles = StyleSheet.create({
  browserButton: {
    height: 40,
    backgroundColor: '#121734',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20
  }
})