const fruits = [
    {
        fruitId: 1,
        fruitName: 'Apel',
        fruitType: 'IMPORT',
        stock: 10
    },
    {
        fruitId: 2,
        fruitName: 'Kurma',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId: 3, 
        fruitName: 'apel',
        fruitType: 'IMPORT',
        stock: 50
    },
    {
        fruitId: 4,
        fruitName: 'Manggis',
        fruitType: 'LOCAL',
        stock: 100
    },
    {
        fruitId: 5,
        fruitName: 'Jeruk Bali',
        fruitType: 'LOCAL',
        stock: 10
    },
    {
        fruitId: 5,
        fruitName: 'KURMA',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId: 5,
        fruitName: 'Salak',
        fruitType: 'LOCAL',
        stock: 150
    }
]

//soal No.1 (Buah apa saja yang dimiliki adit (fruitName))
const fruitsSet = new Set()
const aditFruits = fruits.filter((item) => {
  const fruitDuplicateName = fruitsSet.has(item.fruitName.toLowerCase())
  fruitsSet.add(item.fruitName.toLowerCase())
  return !fruitDuplicateName
})

console.log("buah milik kak Adit yang tidak duplikat:", aditFruits)


//soal No.2 ( Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah
//(fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di
//masing-masing wadah?)
const filterAditFruitsType = fruits.map((fruit) => {
  return fruit.fruitType
})
const aditFruitsType = [...new Set(filterAditFruitsType)]

console.log(`banyak wadah yang dibutuhkan kak Adit: ${aditFruitsType.length}`)

const fruitsOnPLate = aditFruitsType.map((fruitsTypeFilter) => {
  const fruitBaseOnType = fruits.filter((fruit) => {
    if(fruitsTypeFilter === fruit.fruitType) {
      //bingung bagaimana cara agar si apel tidak keduplikat & stocks nya berada pada satu apel (begitu juga kurma)
      return fruit
    }
  })
  return fruitBaseOnType
})

console.log("buah apa saja yang ada dimasing masing wadah: ",fruitsOnPLate)

//soal No.3 (Berapa total stock buah yang ada di masing-masing wadah?)
const stocksByFruitType = {}
const fruitTypeSet = new Set()

fruits.forEach((fruit) => {
  fruitTypeSet.add(fruit.fruitType)
})

const stockBaseOnTheirType = fruitTypeSet.forEach((fruitType) => {
  stocksByFruitType[fruitType] = fruits.reduce((total,fruit) => {
    if(fruit.fruitType === fruitType ){
      total += fruit.stock
    } 
    return total
  }, 0)
})

console.log(stocksByFruitType)
