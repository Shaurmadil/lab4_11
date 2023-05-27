import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { MedWorker } from '../../classes/lab4/MedWorker';
import { Doctor } from '../../classes/lab4/Doctor';
import { Nurse } from '../../classes/lab4/Nurse';
import { useState } from 'react';

export default function Lab4() {

  const [arr, setArr] = useState<(Doctor | Nurse)[]>([]) 
  const [sumInc, setSumInc] = useState<number | undefined>(undefined)
  function calculate() : void{
    const res = []
    for(let i = 0; i < 5; i++){
        if(i % 2 === 0){
          res.push(new Doctor(`Doctor ${i+1}`, `occ ${i+1}`))
        }else {
          res.push(new Nurse(`Nurse ${i+1}`, `occ ${i+1}`))
        }
    }
    setArr(res)
  }
  function addd(sum: number, elem : Doctor | Nurse): number{
    
    return sum + elem.income()
  }
  
  function sumIncome(): void {
    setSumInc(arr.reduce(addd, 0) || undefined)
  }
  

  function funcMap (elem : Doctor | Nurse) : JSX.Element{
    if(elem instanceof Nurse){
      return (
      <View key={elem.name} style={{marginTop: 20}}>
        <Text style={styles.text}>Ім'я = {elem.name}</Text>
        <Text style={styles.text}>Посада = {elem.occupation}</Text>
        <Text style={styles.text}>Кількість відпрацьованих годин на тиждень = {elem.hoursPerWeek}</Text>
        <Text style={styles.text}>Заробіток = {elem.income()}</Text>
      </View>
    )
    }
    return (
      <View key={elem.name} style={{marginTop: 20}}>
        <Text style={styles.text}>Ім'я = {elem.name}</Text>
        <Text style={styles.text}>Посада = {elem.occupation}</Text>
        <Text style={styles.text}>Кількість відпрацьованих годин на тиждень = {elem.patientsPerWeek}</Text>
        <Text style={styles.text}>Заробіток = {elem.income()}</Text>
      </View>
    )
   }

  return (
    <ScrollView>
        <Text style={{ backgroundColor: 'yellow',fontSize: 20, alignSelf: 'center', marginTop: 10}}> Виконав студент групи КН-32 Ярмола М.О. </Text>
        <Text style={{fontSize: 20, alignSelf: 'center', marginTop: 10}}> Завдання:  Медсестра, (поле – кількість відпрацьованих годин за тиждень - р) Лікар (поле–кількість пацієнтів за тиждень - р) ,Дохід медсестри = 10*р ,Дохід лікаря = 8*р </Text>
        <Pressable style={({pressed}) => [{backgroundColor: pressed ? '#66a3ff' : '#0066ff'}, styles.button]} onPress={calculate}>
            <Text style={styles.text}>Розрахувати</Text>
        </Pressable>
        <Pressable style={({pressed}) => [{backgroundColor: pressed ? '#66a3ff' : '#0066ff'}, styles.button]} onPress={sumIncome}>
            <Text style={styles.text}>Знайти</Text>
        </Pressable>
        {arr.map(funcMap)}
        {sumInc 
        ? <Text style={[styles.text, {marginTop: 40}]}>Сумарної величина доходу = {sumInc}</Text>
        : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: 200,
    backgroundColor: 'orange'
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    alignSelf: 'center'
  },
  res: {
    alignSelf: 'center',
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    marginTop: 20
  }
});
