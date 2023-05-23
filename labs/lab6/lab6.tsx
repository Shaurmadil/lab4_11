import { View , Text, StyleSheet} from "react-native";
import { Diesel, ReactiveEngine } from "../../classes/lab6/main";

const Lab6 = () => {

    const diesel = new Diesel(100,50)
    const reactiveEngine = new ReactiveEngine(100)

    return (
        <View style={{alignItems: 'center'}}>
            <Text style={styles.text}>Лабораторна робота №6</Text>
            <Text style={styles.text}>Студента КН-32 Ярмоли Максима</Text>
            <Text style={styles.text}>Дизельний двигун</Text>
            <Text style={styles.text}>Об'єм баку - {diesel.fuelLevel}</Text>
            <Text style={styles.text}>Тип палива - {diesel.fuelType}</Text>
            <Text style={styles.text}>Потужність - {diesel.power}</Text>
            <Text style={styles.text}>Реактивний двигун</Text>
            <Text style={styles.text}>Потужність - {reactiveEngine.power}</Text>
            <Text style={{fontSize: 20, alignSelf: 'center', marginTop: 10}}> ----------------------------------------------------------------------</Text>
            <Text style={{fontSize: 20, alignSelf: 'center', marginTop: 10}}> Завдання: 12вар. Двигун , двигун внутрішнього згоряння , дизель , реактивний двигун </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
        paddingBottom: 15,
      },
})

export default Lab6;