import React, { useState } from "react";
import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import styles from "./TicketSearch.style";
import RadioGroup from "react-native-radio-buttons-group";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Calendar, LocaleConfig } from "react-native-calendars";

function TicketSearch({ navigation }) {
  const countries = ["Ankara", "İstanbul", "Samsun", "İzmir"];
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
  const [cityFromGo, setCityFromGo] = useState("");
  const [cityToGo, setCityToGo] = useState("");

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);

    if (radioButtons[0].selected === true) {
      setIsGidisDonus(false);
      setIsPressedGidisDate(false);
      setIsPressedDonusDate(false);
    } else {
      setIsGidisDonus(true);
      setIsPressedGidisDate(false);
      setIsPressedDonusDate(false);
    }
  }

  const CalendarView = () => {
    return (
      <View
        style={{
          alignItems: "center",
        }}
      >
        {isPressedGidisDate && <Text>Gidiş tarihi seçin</Text>}
        {isPressedDonusDate && <Text>Dönüş tarihi seçin</Text>}
        <Calendar
          onDayPress={(day) => {
            setSelected(day.dateString);
            let reversedDate = day.day + "." + day.month + "." + day.year;
            isPressedGidisDate
              ? setGidisDate(reversedDate)
              : setDonusDate(reversedDate);
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: "orange",
            },
          }}
        />
        <Text></Text>
      </View>
    );
  };

  let touchPropsGidis = {
    style: isPressedGidisDate
      ? styles.gidisContainerPressed
      : styles.gidisContainer,
    onPress: () => {
      setIsPressedGidisDate(!isPressedGidisDate);
      setIsPressedDonusDate(false);
    },
  };

  let touchPropsDonus = {
    style: isPressedDonusDate
      ? styles.donusContainerPressed
      : styles.donusContainer,
    onPress: () => {
      setIsPressedDonusDate(!isPressedDonusDate);
      setIsPressedGidisDate(false);
    },
  };

  const search = () => {
    if (cityFromGo != "" && cityToGo != "" && selected != "") {
      navigation.navigate("TicketSelect", {
        goingDate: gidisDate,
        comebackDate: donusDate,
        citytogo: cityToGo,
        cityfromgo: cityFromGo,
      });
    } else {
      ToastAndroid.showWithGravity(
        "Boş alan bırakmayınız",
        ToastAndroid.LONG,
        ToastAndroid.TOP
      );
    }
  };

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
            setCityFromGo(selectedItem);
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
            setCityToGo(selectedItem);
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
          <TouchableOpacity {...touchPropsGidis}>
            <Text style={{ color: "black" }}>Gidiş</Text>
            <Text style={{ color: "black" }}>{gidisDate}</Text>
          </TouchableOpacity>
          <View style={styles.verticleLine}></View>
          {isGidisDonus ? (
            <TouchableOpacity {...touchPropsDonus}>
              <Text
                style={{
                  color: "black",
                }}
              >
                Dönüş
              </Text>
              <Text
                style={{
                  color: "black",
                }}
              >
                {donusDate}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              disabled={true}
              style={styles.disabledDonusContainer}
              onPress={() => {
                setIsPressedDonusDate(!isPressedDonusDate);
              }}
            >
              <Text style={{ color: "#A4A4A4" }}>Dönüş</Text>
              <Text style={{ color: "#A4A4A4" }}>- - . - - . - - - -</Text>
            </TouchableOpacity>
          )}
        </View>
        <Text></Text>
        {isPressedGidisDate && CalendarView()}
        {isPressedDonusDate && CalendarView()}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.searchButton} onPress={search}>
            <Text>Ara</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default TicketSearch;
