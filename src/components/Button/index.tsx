import { Box } from '@chakra-ui/react'

interface ButtonProps {
  name: string
  color?: string
  bg?: string
  border?: string
  borderColor?: string
  padding?: string
}
const Button = ({
  name,
  color,
  bg,
  border,
  borderColor,
  padding,
}: ButtonProps) => {
  return (
    <Box
      bg={bg}
      as="button"
      color={color}
      fontSize="18px"
      fontWeight="700"
      borderRadius="8px"
      padding={padding}
      border={border}
      borderColor={borderColor}
    >
      {name}
    </Box>
  )
}

export default Button
