import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./TicketSearch.style";
import RadioGroup from "react-native-radio-buttons-group";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Calendar, LocaleConfig } from "react-native-calendars";

function TicketSearch() {
  const countries = ["Egypt", "Canada", "Australia", "Ireland"];
  const [radioButtons, setRadioButtons] = useState([
    {
      id: "1", // acts as primary key, should be unique and non-empty string
      label: "Gidiş",
      value: "gidis",
      //selected: "false",
    },
    {
      id: "2",
      label: "Gidiş-Dönüş",
      value: "gidisdonus",
      selected: "true",
    },
  ]);
  const [selected, setSelected] = useState("");
  const [gidisDate, setGidisDate] = useState("10.10.1996");
  const [donusDate, setDonusDate] = useState("10.10.1997");
  const [isPressedGidisDate, setIsPressedGidisDate] = useState(false);
  const [isPressedDonusDate, setIsPressedDonusDate] = useState(false);
  const [isGidisDonus, setIsGidisDonus] = useState(true);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);

    console.log(radioButtons[0].selected);
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Otobilet.com</Text>
      </View>
      <View style={styles.bodyContainer}>
        <RadioGroup
          radioButtons={radioButtons}
          onPress={onPressRadioButton}
          layout="row"
        />
        <Text></Text>
        <SelectDropdown
          data={countries}
          // defaultValueByIndex={1}
          // defaultValue={'Egypt'}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          defaultButtonText={"Kalkış Noktası seçiniz"}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          renderDropdownIcon={(isOpened) => {
            return (
              <FontAwesome
                name={isOpened ? "chevron-up" : "chevron-down"}
                color={"#444"}
                size={18}
              />
            );
          }}
          dropdownIconPosition={"right"}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
          selectedRowStyle={styles.dropdown1SelectedRowStyle}
          search
          searchInputStyle={styles.dropdown1searchInputStyleStyle}
          searchPlaceHolder={"Search here"}
          searchPlaceHolderColor={"darkgrey"}
          renderSearchInputLeftIcon={() => {
            return <FontAwesome name={"search"} color={"#444"} size={18} />;
          }}
        />
        <Text></Text>
        <SelectDropdown
          data={countries}
          // defaultValueByIndex={1}
          // defaultValue={'Egypt'}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          defaultButtonText={"Varış Noktası seçiniz"}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          renderDropdownIcon={(isOpened) => {
            return (
              <FontAwesome
                name={isOpened ? "chevron-up" : "chevron-down"}
                color={"#444"}
                size={18}
              />
            );
          }}
          dropdownIconPosition={"right"}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
          selectedRowStyle={styles.dropdown1SelectedRowStyle}
          search
          searchInputStyle={styles.dropdown1searchInputStyleStyle}
          searchPlaceHolder={"Search here"}
          searchPlaceHolderColor={"darkgrey"}
          renderSearchInputLeftIcon={() => {
            return <FontAwesome name={"search"} color={"#444"} size={18} />;
          }}
        />
        <Text></Text>
        <View style={styles.gidisDonusContainer}>
          <TouchableOpacity
            style={styles.gidisContainer}
            onPress={() => {
              setIsPressedGidisDate(!isPressedGidisDate);
            }}
          >
            <Text style={styles.button}>Gidiş</Text>
            <Text style={styles.button}>{gidisDate}</Text>
          </TouchableOpacity>
          <View style={styles.verticleLine}></View>
          {isPressedGidisDate ? (
            <TouchableOpacity
              style={styles.donusContainer}
              onPress={() => {
                setIsPressedDonusDate(!isPressedDonusDate);
              }}
            >
              <Text style={styles.button}>Dönüş</Text>
              <Text style={styles.button}>{donusDate}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.disabledDonusContainer}
              onPress={() => {
                setIsPressedDonusDate(!isPressedDonusDate);
              }}
            >
              <Text style={styles.disabledButton}>Dönüş</Text>
              <Text style={styles.disabledButton}>{donusDate}</Text>
            </TouchableOpacity>
          )}
        </View>
        <Text></Text>
        {isPressedGidisDate && (
          <Calendar
            onDayPress={(day) => {
              setSelected(day.dateString);
            }}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: "orange",
              },
            }}
          />
        )}
      </View>
    </View>
  );
}

export default TicketSearch;
