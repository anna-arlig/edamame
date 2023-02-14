import React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
import colors from '../../constants/colors'

function BackArrow(props: SvgProps) {
  return (
    <Svg width={16} height={18} strokeWidth={2} viewBox="0 0 19 22" fill="none" {...props}>
      <Path
        d="M13 0.998049L1 10.998L13 20.998"
        stroke={colors.primary.dark_green}
        stroke-linecap="round"
      />
    </Svg>
  )
}

export default BackArrow
