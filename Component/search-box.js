import * as React from "react";
import { SearchBar } from "@rneui/base";

export default () => {
  const [value, setValue] = React.useState("");
  return (
    <SearchBar
      platform="ios"
      clearIcon={null}
      searchIcon={null}
      cancelIcon={null}
      containerStyle={{}}
      inputContainerStyle={{}}
      inputStyle={{}}
      leftIconContainerStyle={{}}
      rightIconContainerStyle={{}}
      loadingProps={{}}
      onChangeText={newVal => setValue(newVal)}
      onClearText={() => console.log(onClearText())}
      placeholder="     Search"
      placeholderTextColor="#888"
      round
      cancelButtonTitle=''
      cancelButtonProps={{}}
      onCancel={() => console.log(onCancel())}
      value={value}
    />
  );
}