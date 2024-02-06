import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isCancel,
  isInProgress,
  types,
} from 'react-native-document-picker';
import Toast from "react-native-toast-message";
import { CommonActions } from "@react-navigation/native";
import { navigationRef } from '../Navigation/Navigation';

export const openDocPicker = async () => {
  try {
    const pickerResult = await DocumentPicker.pickSingle({
      presentationStyle: 'fullScreen',
      copyTo: 'cachesDirectory',
    });

    return pickerResult;
  } catch (e) {
    console.log('error--', e);
  }
};

export const successToast = (message: string) => {
  Toast.show({ type: "success", text1: message });
};

export const errorToast = (message: string) => {
  Toast.show({ type: "error", text1: message });
};

export const dispatchNavigation = (name: string, params?: any) => {
  navigationRef.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [{ name: name, params: params }],
    }),
  );
};