import { StyleSheet } from 'react-native';

import COLORS from '../../constants/Colors';

export const styles = StyleSheet.create({
  primaryButtonStyle: {
    backgroundColor: COLORS.light.BLUE,
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: COLORS.light.BLUE,
    height: 40,
    alignItems: "center",
    borderRadius: 30,
  },
  buttonStyle: {
    backgroundColor: "#fff",
    borderWidth: 2,
    color: "#fff",
    borderColor: COLORS.light.BLUE,
    height: 40,
    alignItems: "center",
    borderRadius: 30,
  },
  primaryButtonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    fontWeight: "600",
  },
  warningButtonStyle: {
    backgroundColor: "#fff",
    borderWidth: 2,
    color: "#fff",
    borderColor: COLORS.light.RED,
    height: 40,
    alignItems: "center",
    borderRadius: 30,
  },
  buttonTextStyle: {
    color: COLORS.light.BLUE,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    fontWeight: "600",
  },
  warningTextStyle: {
    color: COLORS.light.RED,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    fontWeight: "600",
  },
});
