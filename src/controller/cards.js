import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://adephimova:UuFFFuD3EUj1csSm@cluster0.bf2teql.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const database = client.db("english_words");

export async function getWords(req, res) {
  try {
    await client.connect();
    const words = database.collection("words");

    const groupId = Number(req.query.group_id);

    const params = {};
    if (groupId) params.groupId = groupId;

    const data = await words.find(params).toArray();

    res.json(data);
  } catch (error) {
    res.status(500).send(error);
  } finally {
    await client.close();
  }
}

export async function insertWords(req, res) {
  try {
    await client.connect();
    const words = database.collection("words");

    await words.insertMany([
      {
        id: 42885287,
        englishWord: "beat",
        englishExample: "He wanted to <em>beat</em> me up for speaking Polish.",
        russianWord: "побить",
        russianExample:
          "Он хотел <em>побить</em> меня за то, что я говорил по-польски.",
        association: "",
        groupId: 1675753635179,
        done: true,
        picture:
          "https://globalsymbols.com/uploads/production/image/imagefile/23534/17_23535_774217c0-95f6-45cc-9f45-90d13d14f161.png",
      },
      {
        id: 42885283,
        englishWord: "beat",
        englishExample: "He knows he cannot <em>beat</em> me.",
        russianWord: "победить",
        russianExample: "Он знает, что не сможет меня <em>победить</em>.",
        association: "test",
        groupId: 1675753635179,
        done: true,
        picture: "https://inbusiness.kz/uploads/55/images/ALjMpFgf.jpg",
      },
      {
        id: 42884336,
        englishWord: "butcher",
        englishExample:
          "He is a <em>butcher</em>, but by winning votes he becomes a senator.",
        russianWord: "мясник",
        russianExample:
          "Он <em>мясник</em>, но, набрав необходимое количество голосов, становится сенатором.",
        association: "",
        groupId: 1675753635179,
        done: true,
        picture:
          "https://www.shutterstock.com/shutterstock/photos/711709450/display_1500/stock-vector-professional-butcher-vector-classic-butcher-man-with-knife-eco-farm-organic-market-for-storeroom-711709450.jpg",
      },
      {
        id: 42884263,
        englishWord: "tramp",
        englishExample: "Then the <em>tramp</em> must be near.",
        russianWord: "бродяга",
        russianExample: "Тогда и <em>бродяга</em> должен быть где то рядом.",
        association: "",
        groupId: 1675753635179,
        done: false,
        picture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRRpmNmultjZ5TruCirtpSd0AiGk75GnF071TmggFfEZMeMnOspn2vJi6uwSVuxAjQiZI&usqp=CAU",
      },
      {
        id: 42884210,
        englishWord: "diner",
        englishExample: "Last I checked, it was a <em>diner</em>.",
        russianWord: "закусочная",
        russianExample:
          "В последний раз, когда я здесь был, это была <em>закусочная</em>.",
        association: "",
        groupId: 1675753635179,
        done: true,
        picture:
          "https://www.villagedinermilfordpa.com/wp-content/uploads/2020/06/IMG_7567-scaled.jpg",
      },
      {
        id: 42884067,
        englishWord: "embarrass",
        englishExample:
          "We don't want to do anything that would <em>embarrass</em> the government or the people of Vietnam.",
        russianWord: "смутить",
        russianExample:
          "«Мы бы не хотели сделать что-либо, что могло бы <em>смутить</em> правительство или народ Вьетнама.",
        association: "",
        groupId: 1675753635179,
        done: true,
        picture:
          "https://thumbs.dreamstime.com/b/embarrassed-man-smiling-illustration-young-hand-behind-head-blushing-138460712.jpg",
      },
      {
        id: 42884066,
        englishWord: "embarrass",
        englishExample:
          "Together with Marta, we're going to try not to <em>embarrass</em> the Czech Republic.",
        russianWord: "опозорить",
        russianExample:
          "Буду вместе с Мартой стараться, чтобы не <em>опозорить</em> Чехию.",
        association: "",
        groupId: 1675753635179,
        done: true,
        picture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStWeU_SMpeBKNtWhIMpldBkwbxSZwjCttGGw&usqp=CAU",
      },
      {
        id: 42884034,
        englishWord: "to dump",
        englishExample:
          "If she ever lost her sense of humour, I would have <em>to dump</em> her.",
        russianWord: "бросить",
        russianExample:
          "Если бы она когда-нибудь потеряла свое чувство юмора, мне пришлось бы ее <em>бросить</em>.",
        association: "",
        groupId: 1675753635179,
        done: true,
        picture:
          "https://www.wikihow.com/images/thumb/4/40/Get-Rid-of-Someone-You-Don%27t-Like-Step-2-Version-2.jpg/v4-460px-Get-Rid-of-Someone-You-Don%27t-Like-Step-2-Version-2.jpg.webp",
      },
      {
        id: 42884025,
        englishWord: "dump",
        englishExample:
          "Another <em>dump</em> containing 60 barrels was discovered nearby.",
        russianWord: "свалка",
        russianExample:
          "Вблизи от этого места была обнаружена еще одна <em>свалка</em>, содержащая 60 бочек.",
        association: "",
        groupId: 1675753635179,
        done: true,
        picture:
          "data:image/jpeg;base64,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",
      },
      {
        id: 42884005,
        englishWord: "irritable",
        englishExample:
          "Ron's younger sister slouched into the room, looking <em>irritable</em>.",
        russianWord: "раздраженной",
        russianExample:
          "Младшая сестра Рона, сутулясь, вошла в комнату, она выглядела <em>раздраженной</em>.",
        association: "",
        groupId: 1675753635179,
        done: true,
        picture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3KjTfKk_8Ecg-N_C-pzpiyKVLZ5ER_gD6Sg&usqp=CAU",
      },
      {
        id: 42883973,
        englishWord: "suspense",
        englishExample:
          "Mostly because the <em>suspense</em> is too much for me.",
        russianWord: "напряжение, неизвестность, ожидание, интрига",
        russianExample:
          "Потому что <em>неизвестность</em>, это просто невыносимо для меня.",
        association: "",
        groupId: 1675753635179,
        done: false,
        picture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPeQ1QKw1MQdeW0a7etWg9qh_PDgLfhQvSkQ&usqp=CAU",
      },
      {
        id: 42883921,
        englishWord: "put on",
        englishExample: "I should <em>put on</em> a necklace.",
        russianWord: "надеть",
        russianExample: "Извини, к этому стоило бы <em>надеть</em> колье.",
        association: "",
        groupId: 1675753635179,
        done: true,
        picture:
          "https://putthison.com/wp-content/uploads/2018/04/tumblr_p4q9snUqCj1qa2j8co2_r1_1280.png",
      },
      {
        id: 42883820,
        englishWord: "was up all night",
        englishExample: "I <em>was up all night</em> preparing these notes.",
        russianWord: "не спал всю ночь",
        russianExample: "Я <em>не спал всю ночь</em> и готовил эти записи.",
        association: "",
        groupId: 1675753635179,
        done: false,
        picture:
          "https://i.insider.com/55269abf6da81118450c8e97?width=912&format=jpeg",
      },
      {
        id: 42883790,
        englishWord: "nice to have you back",
        englishExample: "It's <em>nice to have you back</em>.",
        russianWord: "хорошо, что вы вернулись",
        russianExample: "Как <em>хорошо, что вы вернулись</em>.",
        association: "",
        groupId: 1675753635179,
        done: false,
        picture:
          "https://cdn.quotesgram.com/img/70/28/2007827901-welcomeback1.gif",
      },
      {
        id: 42883725,
        englishWord: "jog",
        englishExample:
          "Further on the plan, a light <em>jog</em> of low intensity(slow running) from 30 to 50 minutes.",
        russianWord: "пробежка",
        russianExample:
          "Далее по плану легкая <em>пробежка</em> низкой интенсивности (медленный бег) от 30 до 50 минут.",
        association: "jog with a dog",
        groupId: 1675753635179,
        done: false,
        picture:
          "https://bbtr.siberianhealth.com/upload/medialibrary/7a2/start_run_3.jpg?155855911270734?w=372",
      },
      {
        id: 43075878,
        englishWord: "whatever",
        englishExample: "The implementation language can be <em>whatever</em>.",
        russianWord: "любой",
        russianExample:
          "Что же касается языка исполнения, то она может быть <em>любой</em>.",
        association: "",
        groupId: 1675754923284,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43075874,
        englishWord: "whatever",
        englishExample: "They kept eating <em>whatever</em> it produced.",
        russianWord: "всё",
        russianExample:
          "Они были вынуждены употреблять в пищу <em>всё</em>, что только удавалось раздобыть.",
        association: "",
        groupId: 1675754923284,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43073796,
        englishWord: "reasonable",
        englishExample:
          "No <em>reasonable</em> person believes that abusing children is acceptable.",
        russianWord: "разумный",
        russianExample:
          "Ни один <em>разумный</em> человек не считает, что жестокое обращение с детьми является приемлемым.",
        association: "",
        groupId: 1675754923284,
        done: true,
        picture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmV-PaiqRh_lhzQQqVaJDit0n7ovhE1Dg7XQ&usqp=CAU",
      },
      {
        id: 43073693,
        englishWord: "liability",
        englishExample:
          "Thus fault-based <em>liability</em> attaches to biodiversity damage.",
        russianWord: "ответственность",
        russianExample:
          "Таким образом, <em>ответственность</em> на основании вины возлагается за ущерб, причиненный биоразнообразию.",
        association: "",
        groupId: 1675754923284,
        done: true,
        picture:
          "https://napkinfinance.com/wp-content/uploads/2016/11/NapkinFinance-Liability-Napkin-08-16-20-v06.jpg",
      },
      {
        id: 43073469,
        englishWord: "drown",
        englishExample: "It can skyrocket your career or <em>drown</em> it.",
        russianWord: "утопить",
        russianExample:
          "Оно может привести ваш проект к успеху или <em>утопить</em> его.",
        association: "",
        groupId: 1675754923284,
        done: false,
        picture:
          "https://us.123rf.com/450wm/ilyaf/ilyaf1712/ilyaf171200002/ilyaf171200002.jpg?ver=6",
      },
      {
        id: 43073460,
        englishWord: "drown",
        englishExample: "This also means they can <em>drown</em> like humans.",
        russianWord: "утонуть",
        russianExample:
          "Это также означает, что они, как и человек, могут <em>утонуть</em>.",
        association: "",
        groupId: 1675754923284,
        done: false,
        picture:
          "https://us.123rf.com/450wm/ilyaf/ilyaf1712/ilyaf171200002/ilyaf171200002.jpg?ver=6",
      },
      {
        id: 43073443,
        englishWord: "drowning",
        englishExample:
          "People kill themselves by hanging or <em>drowning</em>.",
        russianWord: "утопления",
        russianExample:
          "В основном, люди уходят из жизни путем повешения или <em>утопления</em>.",
        association: "",
        groupId: 1675754923284,
        done: false,
        picture:
          "https://us.123rf.com/450wm/ilyaf/ilyaf1712/ilyaf171200002/ilyaf171200002.jpg?ver=6",
      },
      {
        id: 43073397,
        englishWord: "hatchet",
        englishExample: "He had a <em>hatchet</em>, but no firearms.",
        russianWord: "топор",
        russianExample:
          "У него был <em>топор</em>, но никакого огнестрельного оружия не было.",
        association: "",
        groupId: 1675754923284,
        done: true,
        picture:
          "https://www.helkonorthamerica.com/uploads/5/5/2/8/55283177/s636580399330128839_p1_i38_w1400.jpeg",
      },
      {
        id: 43073386,
        englishWord: "punter",
        englishExample: "Especially if she's with a <em>punter</em>.",
        russianWord: "клиент",
        russianExample: "Особенно, когда у нее <em>клиент</em> .",
        association: "",
        groupId: 1675754923284,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43073381,
        englishWord: "punter",
        englishExample:
          "The first thing every <em>punter</em> should do is to find a casino they can trust.",
        russianWord: "игрок",
        russianExample:
          "Первое, что должен сделать каждый <em>игрок</em> - найти казино, которому они могут доверять.",
        association: "",
        groupId: 1675754923284,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43073344,
        englishWord: "afford",
        englishExample:
          "Many people already cannot <em>afford</em> current prices.",
        russianWord: "позволить себе",
        russianExample:
          "И сейчас многие страны не могут <em>позволить себе</em> нынешний уровень цен на нефть.",
        association: "",
        groupId: 1675754923284,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43073190,
        englishWord: "grocer",
        englishExample: "With the neighborhood <em>grocer</em>, the farmer",
        russianWord: "бакалейщиком",
        russianExample:
          "С <em>бакалейщиком</em> по соседству, фермером и застройщиком.",
        association: "",
        groupId: 1675754923284,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43073173,
        englishWord: "hairy",
        englishExample: "He was <em>hairy</em> like a bear.",
        russianWord: "волосатой",
        russianExample: "«Я была <em>волосатой</em>, как медведь».",
        association: "",
        groupId: 1675754923284,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43073162,
        englishWord: "armor",
        englishExample: "And some <em>armor</em> is better then nothing.",
        russianWord: "броня",
        russianExample:
          "Разумеется, что хоть какая-то <em>броня</em> - лучше, чем ничего.",
        association: "",
        groupId: 1675754923284,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43073072,
        englishWord: "bunch",
        englishExample:
          "Just another <em>bunch</em> of criminals who should be in jail.",
        russianWord: "группа",
        russianExample:
          "Но есть еще <em>группа</em> преступников, которым приходится отбывать наказание в тюрьмах.",
        association: "",
        groupId: 1675754923284,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43072830,
        englishWord: "gambling",
        englishExample: "Sometimes I think about <em>gambling</em> less.",
        russianWord: "азартные игры",
        russianExample:
          "Иногда я подумываю о том, <em>чтобы</em> меньше <em>играть в азартные игры</em>.",
        association: "",
        groupId: 1675754923284,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43193522,
        englishWord: "huge load",
        englishExample:
          "This caused a <em>huge load</em> on the network, processor, and disk.",
        russianWord: "огромную нагрузку",
        russianExample:
          "Это влекло <em>огромную нагрузку</em> на сеть, процессор, диск.",
        association: "",
        groupId: 1676179199268,
        done: false,
        picture: "https://cdn.langeek.co/photo/22792/original/",
      },
      {
        id: 43193476,
        englishWord: "rail service",
        englishExample:
          "On 23 July 2006 the State Railways temporarily suspended all <em>rail service</em> into İzmir.",
        russianWord: "железнодорожные перевозки",
        russianExample:
          "23 июля 2006 года Государственные железные дороги временно приостановили все <em>железнодорожные перевозки</em> в Измир.",
        association: "",
        groupId: 1676179199268,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43193396,
        englishWord: "narrow",
        englishExample:
          "Lying in a <em>narrow</em> valley, the streets of the city are <em>narrow</em> and winding.",
        russianWord: "узкой",
        russianExample:
          "Находясь в <em>узкой</em> долине, улицы города <em>узкие</em> и извилистые.",
        association: "",
        groupId: 1676179199268,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43193338,
        englishWord: "cycle lane",
        englishExample:
          'The correct term in the future should be "<em>cycle lane</em>".',
        russianWord: "велосипедная полоса движения",
        russianExample:
          'В будущем следует использовать правильный термин - "<em>велосипедная полоса движения</em>".',
        association: "",
        groupId: 1676179199268,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43193281,
        englishWord: "motorway",
        englishExample:
          "Georgia has a <em>motorway</em> system, that is currently under development.",
        russianWord: "автомагистраль",
        russianExample:
          "В Грузии есть небольшая <em>автомагистраль</em>, которая в настоящее время находится в стадии разработки.",
        association: "",
        groupId: 1676179199268,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43193260,
        englishWord: "service station",
        englishExample: "There was a man in the <em>service station</em>.",
        russianWord: "заправке",
        russianExample: "Там, на <em>заправке</em>, был человек.",
        association: "",
        groupId: 1676179199268,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43193121,
        englishWord: "truck",
        englishExample:
          "If you do not have your own <em>truck</em> and cannot borrow one, this means renting a moving <em>truck</em>.",
        russianWord: "грузовика",
        russianExample:
          "Если у вас нет собственного <em>грузовика</em> и вы не можете взять его, это означает, что вы арендуете движущийся <em>грузовик</em>.",
        association: "",
        groupId: 1676179199268,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43193098,
        englishWord: "van",
        englishExample: "Hamel paid me to crack the <em>van</em> door.",
        russianWord: "фургона",
        russianExample:
          "Хемель заплатил мне за то, чтобы я взломал дверь <em>фургона</em>.",
        association: "",
        groupId: 1676179199268,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43193036,
        englishWord: "coach",
        englishExample:
          "At 1735 hours, a <em>coach</em> containing 15 people arrived.",
        russianWord: "автобус",
        russianExample:
          "В 17 ч. 35 м. прибыл <em>автобус</em>, в котором находилось 15 человек.",
        association: "",
        groupId: 1676179199268,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43192909,
        englishWord: "never mind",
        englishExample: "Ahh... 0h, well, <em>never mind</em>.",
        russianWord: "ничего страшного",
        russianExample: "Ну и ладно, <em>ничего страшного</em>.",
        association: "",
        groupId: 1676179199268,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43192698,
        englishWord: "go down",
        englishExample: "Third, cows can't <em>go down</em> stairs.",
        russianWord: "спуститься",
        russianExample:
          "Распространено мнение, что коровы не могут <em>спуститься</em> по лестнице.",
        association: "",
        groupId: 1676179199268,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43192597,
        englishWord: "past",
        englishExample:
          "Ships from Banten proceeded eastward along the north coast of Java, <em>past</em> Kalapa, <em>past</em> Indramayu head, <em>past</em> Cirebon.",
        russianWord: "мимо",
        russianExample:
          "Корабли из Бантена шли на восток вдоль северного побережья Явы, <em>мимо</em> Калапы, <em>мимо</em> головы Индрамаю и <em>Чиребона</em>.",
        association: "",
        groupId: 1676179199268,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43192450,
        englishWord: "along",
        englishExample:
          "Slavs <em>along</em> the large rivers moved the basic vector of their moving lay <em>along</em> Volga.",
        russianWord: "вдоль",
        russianExample:
          "Двигались они <em>вдоль</em> крупных рек, основной вектор их перемещения лежал <em>вдоль</em> Волги.",
        association: "",
        groupId: 1676179199268,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43192392,
        englishWord: "traffic light",
        englishExample: "The <em>traffic light</em> was red and I stopped.",
        russianWord: "светофор",
        russianExample:
          "Для меня <em>светофор</em> уже был красный, я остановился и потерял дорогу.",
        association: "",
        groupId: 1676179199268,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43192372,
        englishWord: "town hall",
        englishExample:
          "Have a bit of respect, we're <em>town hall</em> officials.",
        russianWord: "мэрии",
        russianExample: "Прояви уважение, мы чиновники <em>мэрии</em>.",
        association: "",
        groupId: 1676179199268,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43192316,
        englishWord: "sport ground",
        englishExample:
          "But, there isn't a <em>sport ground</em> near the school.",
        russianWord: "спортивной площадки",
        russianExample: "Нет <em>спортивной площадки</em> возле школы.",
        association: "",
        groupId: 1676179199268,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43192294,
        englishWord: "playground",
        englishExample: "You act like it's a <em>playground</em>.",
        russianWord: "детская площадка",
        russianExample:
          "Ты ведешь себя так, будто это <em>детская площадка</em>.",
        association: "",
        groupId: 1676179199268,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43192269,
        englishWord: "roundabout",
        englishExample:
          "Priority is given to the one driving on the <em>roundabout</em> unless there is a STOP sign at the entrance.",
        russianWord: "кольцу",
        russianExample:
          "Приоритет отдается тому, кто движется по <em>кольцу</em>, за исключением наличия знака СТОП на входе.",
        association: "",
        groupId: 1676179199268,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43192217,
        englishWord: "crossroads",
        englishExample: "At this <em>crossroads</em> our story begins.",
        russianWord: "перекрёстке",
        russianExample:
          "Вот примерно на этом <em>перекрёстке</em> и началась наша история.",
        association: "",
        groupId: 1676179199268,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43192203,
        englishWord: "crossroads",
        englishExample: "But we are at a dangerous <em>crossroads</em>.",
        russianWord: "перепутье",
        russianExample:
          "Тем не менее, мы находимся на опасном <em>перепутье</em>.",
        association: "",
        groupId: 1676179199268,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43192166,
        englishWord: "crossing",
        englishExample:
          "Doing whatever you like is now <em>crossing</em> a line.",
        russianWord: "переход",
        russianExample:
          "Делать все, что ты хочешь - это <em>переход</em> за черту.",
        association: "",
        groupId: 1676179199268,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43191725,
        englishWord: "queued",
        englishExample:
          "Twelve thousand visitors <em>queued</em> to see the fully furnished house.",
        russianWord: "стояли в очереди",
        russianExample:
          "Двенадцать тысяч посетителей <em>стояли в очереди</em>, чтобы увидеть полностью меблированный дом.",
        association: "",
        groupId: 1676179199268,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43191649,
        englishWord: "plenty",
        englishExample:
          "Johannesburg has <em>plenty</em> to offer visitors, too.",
        russianWord: "много",
        russianExample:
          "Барселона имеет <em>много</em>, чтобы предложить также самым маленьким посетителям.",
        association: "",
        groupId: 1676179199268,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43191646,
        englishWord: "plenty",
        englishExample: "I know <em>plenty</em> about how Axe Capital works...",
        russianWord: "много",
        russianExample:
          "Я знаю <em>много</em> о том, как работает Акс Капитал.",
        association: "",
        groupId: 1676179199268,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43339618,
        englishWord: "get there",
        englishExample:
          "So remote, that you can only <em>get there</em> by helicopter.",
        russianWord: "добраться туда",
        russianExample:
          "Расположен он в местности настолько непроходимой, что <em>добраться туда</em> можно только на вертолете.",
        association: "",
        groupId: 1676179199268,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43342546,
        englishWord: "get one for the road",
        englishExample: "Can I <em>get one for the road</em>?",
        russianWord: "одну на посошок",
        russianExample: "Плесни мне <em>одну на посошок</em>?",
        association: "",
        groupId: 1676189101146,
        done: true,
        picture:
          "https://ic.pics.livejournal.com/irinavasillevna/74474770/285723/285723_900.png",
      },
      {
        id: 43342454,
        englishWord: "sip",
        englishExample: "Dad used to let me <em>sip</em> his beer.",
        russianWord: "потягивать",
        russianExample:
          'Отец разрешал мне <em class="both">потягивать</em> его пивцо.',
        association: "",
        groupId: 1676189101146,
        done: true,
        picture:
          "data:image/jpeg;base64,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",
      },
      {
        id: 43342423,
        englishWord: "sip",
        englishExample: "People will kill just for a <em>sip</em> of water.",
        russianWord: "глоток",
        russianExample: "Люди готовы убить тебя за <em>глоток</em> воды.",
        association: "",
        groupId: 1676189101146,
        done: true,
        picture:
          "data:image/jpeg;base64,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",
      },
      {
        id: 43342347,
        englishWord: "chug",
        englishExample: "Okay, <em>chug</em> that beer for me.",
        russianWord: "выпей залпом",
        russianExample: "Так, <em>выпей залпом</em> это пиво за меня.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture: "https://s3.amazonaws.com/theoatmeal-img/thumbnails/chug.png",
      },
      {
        id: 43342294,
        englishWord: "round of drinks",
        englishExample: "Could we get another <em>round of drinks</em>?",
        russianWord: "по одной",
        russianExample: "Можно нам еще <em>по одной</em>?",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "data:image/jpeg;base64,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",
      },
      {
        id: 43342277,
        englishWord: "round of drinks",
        englishExample: "Tom ordered another <em>round of drinks</em>.",
        russianWord: "рюмочке для всех",
        russianExample: "Том заказал ещё по <em>рюмочке для всех</em>.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "data:image/jpeg;base64,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",
      },
      {
        id: 43342175,
        englishWord: "pick up tab",
        englishExample:
          "I offered to <em>pick up</em> the <em>tab</em>, Julia.",
        russianWord: "оплатить счёт",
        russianExample: "Я просто предложил <em>оплатить счёт</em>, Джулия.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "https://www.datingadvice.com/wp-content/uploads/2012/04/featured-large-28.jpg",
      },
      {
        id: 43342102,
        englishWord: "on the house",
        englishExample: "All <em>on the house</em>, you and your date.",
        russianWord: "за счет заведения",
        russianExample:
          "Всё <em>за счет заведения</em>, тебе и тому, с кем у тебя свидание.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYB0OGCSb8H9_n2Od2zBwlNqCiULk7-j_bLgCfw3VRmP8qUqhKgRJPGxjpckhGVJKQsf4&usqp=CAU",
      },
      {
        id: 43342068,
        englishWord: "stink",
        englishExample: "Pretty, but her feet <em>stink</em>.",
        russianWord: "воняет",
        russianExample: "Симпатичная, но у нее от ног <em>пахнет</em>.",
        association: "",
        groupId: 1676189101146,
        done: true,
        picture:
          "https://st2.depositphotos.com/2041241/5185/i/950/depositphotos_51854397-stock-photo-unbearable-stink.jpg",
      },
      {
        id: 43342023,
        englishWord: "rancid",
        englishExample:
          "Unless you're <em>rancid</em>, moldy, like three weeks old.",
        russianWord: "протухший",
        russianExample:
          'В том случае, если ты не <em class="both">протухший</em> и не покрытый плесенью, трехнедельной давности.',
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "https://thumbs.dreamstime.com/b/rotten-pear-rotten-fruit-bad-fruit-rotten-pear-rotten-fruit-bad-fruit-pear-mold-147245331.jpg",
      },
      {
        id: 43342012,
        englishWord: "rancid",
        englishExample:
          "Do not use additional fish oil that has a <em>rancid</em> smell or expires.",
        russianWord: "прогорклый",
        russianExample:
          "Не используйте добавку для рыбьего жира, которая имеет <em>прогорклый</em> запах или у которой закончился срок годности.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "https://otvet.imgsmail.ru/download/7ac25d2cd21dc5bfb344f52e192c63c2_i-177.jpg",
      },
      {
        id: 43341956,
        englishWord: "covered with mold",
        englishExample:
          "Caves are often <em>covered with mold</em>, they are dirty and raw.",
        russianWord: "покрыты плесенью",
        russianExample:
          "Пещеры зачастую <em>покрыты плесенью</em>, они грязные и сырые.",
        association: "1",
        groupId: 1676189101146,
        done: false,
        picture:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFhYZGBgaGh4aHBwcHBoaHB4cGhocGhocGhohIS4lHB4rIxoYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISGjQrJCQ0NDQ0NDE0NDQ0PTQ0NDU0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYBBwj/xAA9EAACAQIEAwUGBAQGAwEBAAABAhEAAwQSITEFQVEGImFxkRMygaGx0UJSwfAUYnLhByNTgpLxFaLSMyT/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAkEQEBAAICAgICAwEBAAAAAAAAAQIRITEDEhNBUWEEInGhkf/aAAwDAQACEQMRAD8A3y1Zs4pl2PwqmlwHY1KDVkK2uIA+8Iq0jg7GaBiuq5GxpaA8K4aHWsew31q3bxStzjzpaNK+1cse6PKuttXLOwoBXqWH90eVduVyxsKAlpUqVIFSpUjTBCvN+Oe+fP8AWvR68443758/1p4hW4Tuf6hV3jKg3bAO0vP/ABFUuEbn+qrvGLQe9YU6AlvoKf0PsYw9u2I0X5GrN6ApjYDl51Uw2BtaafOp8SgQZU0n4/vYUY9qvQet4vJ0lWI9KyGPabjnxJrSYJ/828hPMH4GszjffuE9D9K0y6RATEKjA5Nzp896P4C0mUAlPlQfg6IXy3HVFLASzQADua1TYjhSHKL9x43y23YeuSD8K5pGtodxe2jIEXLz2jQZT96fhMCWyoqF9tFUtA01IAMedE1u8KuQBiWtkfnRre46ugHoa0vCLmGsKQl8NnIgnmSMoAga/wB6yywy9va9Ncc56es7CLS6GTuzj1ZtqK8O4cnsg0d7YHQ7aCh62hHjLfUxRTh+OQWwjMF8fMztXP8Axuc7/jf+Tx45/qO/hyBsABqe7NV1vLI1A+FFDcskEe2XXyqH2WH/ANVPRa9DTh2rHEoPH4UPuYlS4b8IjWNz1j0olcwlgtm/iEAiIGUeutSqmGG1xB/x+9GhtSsYpSwUH5GiCrAY/vSoPZ4YMG9qmhnl4jr41JexNkqQL6gnnoY+FRljarHKRjuIXwLjCNoHoAKVXLvBrLEk8QeTr7ln/wCK7WfxVr8uIBhu1AUw8ofGV+tH8H2iU/iHx0p1zh1txqo9NKG3uylo6p3D/KSvyGlb6yn2w/rWnscURqvW8Qp2NeftwDEJ/wDndnwYT8xH61xcZirXv283ipn6waPa/cHrPqvRgadWEw/a1VMPmQ/zAj6xNHsJ2hR+YPxpzKFcbGiS8y7GrNjGjYj0oPax6Nzqyrg7UJGc4bYzTrO1BgelWLeLZfEUaArSqrbxqHfQ+P3qyD0pG7SrlKgFXm3GveP7516TXmvGj3j8aeIQ8H3P9VXeLW816yJI9/b+kVQ4Mdf91XONqxvWgm/f5xyFP6H2KYbAiRLMfOJ+lSY2xBQAkAyTPgKo2sLcGpf/ANn+9VuOYw2E1Jd7hCooJ05u5J5DSlMpjzVzG5cRS4pjlsXhcjMHQiAdysRvsPtWWxL3brMdgdwNB9yKNYfAPdfM5J216DkB0EVevYDIBA1P6cqeWW1Y4Mh/44Lqf3964cQqxRbiRAJAg8tfGfv8qzeIMzptG+5mo9leqPGYvMDr8NKfwfi5w9xHEsisGZJgGN46Hx9apva3qtcSKm/2mqV3jdx7Tg8Yl1EdDKMsg/HY9DuD5VDecZj51hewPFClz2DHuvJWeTgSQPMD/wBa2F9GLMQV35zXN4sPTyWfpv5c/fxy/tI1wUz2lVHzjmnqaYFcndfU/auvbl0tNeqJ74qPE2ygBJGvQzSGCZhOYDw5ijY0a+KFVLuOFWTwsn8Y50NTh4fQPrrygafHyo2D/wDyApU3/wAP/P8AL+9do2NMphcNeUBrN27bJEhRnhhmAzJBgx0jyonhuM8QtuqtdR0YFszKrwBpJyw28CojjVRw0aAACBMAkFpUxI3/AEmiXAeHNmLuiqpuRbDqRIgzAMsVKk6RvlPKlKkSwva2+iscRY91A4KZoYaCe9qokgfsUrP+IuGI76XEPRlkH4j7Ve4th+/btgKqKJl8wAXIQFDyJBI1E7xNY7HcFQWxmOrXAr9yYEsUYtAI0bKY35bTVW2BtMPx7BX9JAMZiCORjXrGo5V1+CYR/cYITqMrZCfGNJrEDBqs9wo6ZmZ85yuIzAhSBA0G0zmA1FXcThleLrrlyqsGy6hGlS2XIPcbqQI0B1JilvfZ7ak8AvpravkjowBHyj9aS4rGWvet5x1Q6+hisVwq/i2XPbuOB+GRowBKyWPORrHyonZ7VYu2Vz99SJIKQdDBhph+eo6eOi4G/wAtZY7WhdLisn9akD12ozhe0Fp/xD4Gsjgu05vM6HDB8vMaSI0iZ1MgR4iovbYO6xGR7b89I1EcwddxVbv5H9a9DXEo2zA1Kl1l90kV53hraH/8MYPBWI/XWiFrFYu3+Vx1U/8AYo3+h6/ivQLfESPeE+I+1XLOKRtiJ6bGvPk7TMNLltl8YJHqJq/hOM2n2Yes0blK42NxXmnGx3j8a2OHxrAd1gw9aAcZ4eXllI8jp6GnCBeDHX/dVziwc3reQgEBjr8PA1V4WhViCI7wqTi99lvWyok5W03/AC0/o/tfNy6uXMw7xjSDry/DQa/iHxWNCE/5NhcvTMzDn8z6UUU3HZCymFMwIH61nOHcWe7dv3Gmc+UAaaKo28BNY59x0eHWrWucqui6CgnFMRvv+/OrqM2UOQdZobjWzDUab0WtZIzeMukk/HSqF9DHy9P38qLX7IMx50Mun8MfvekmxRtIXcKgJZjAA1J+9dx+FKasBpocrK0HocpMHzq7jCLNhssh2hSw3ClhmAM8xV1MNaNuURkDoUYNvmC5lboQYnzGlT76qvh3Lu8srZxJt3Edd0cMPGDJHx1FeiDHs4zqjFW7wPUHUc685uW2HSfHatt2e4xh1sBHYobYAaWkNM95R1JB0AkVp67u3NvXCxcx7DdCPMGKacY51Ckx0Bir/AeGrj3uOty4ttFhSMqqGOwKwc/U6jSNpmhnELWIw97JlAVNXn8YPO34QNPGncbCmUrj4q68dxu6Z2NOfH3fyN/xarqYpOja+X3p9m8HJAB89PvQYQeI3BIytPk2nwiqNvEOogbyeWuupEVsbXD85kmB61Na7O2s2cl2J8QBp8KcxpWxjP4250PpSr0IcHw/+mfVvvSo9aXs8rxKkDmcjRABnKDqR+nwFbJcZbaMgynKgEuHVQrksU3LODJmIPXXVlnhyG6gW2yMGGZh3UbUNInfb/upO03Di1zMhObKZ0UgdBtpJHOlJpKLFcYsuio5Vy1z2as7TlDNGcyRmXl0Ox3ipOP3ka1eto3tGFgt7TuBRlaAsyO8dgNv1q3Ozqmz7RnIdTOY6gMWBErrOgGog6msdjhlQgZxBOmoDQII31Eco50WgZZ7t+3aUMjOircytEGG9mgYCCdWO+4OlWEsvhme1cClBbJ1UHcZpSTBjvab6RGpoJw3FNYuozpoVT3gRKhgSR1IiZ+9aK7xg3ml7as4aFYajJnEaa6kCT4ClKBTgPDw2dgSJtpOpZZkhiPMLm0J0YUN4KQ5KBmZizIA6yO8jGUJbRSQw25EnetLhL6og7wVGJBJ0AVQQM0iDMKKC9mOHsLz3C6rLmFIALSASR5B+WhkUwks4MI4ZNRdVVYjvSCrgwTEQVU6/eqePsJ7e0kR3QwK5gJBJmNixIX1rRNw4m3aR2kq+VydJ75YaA7zEefjVXDcDZLyO7ZiqxznQnX0O3hT5DJ9oeAMhDLPfI1kTmBEmNxJMny12ECsPfupOS46lTqCdhrudevqK9C7RWibtgd4Q4MjYiYIPjqKymPwMd+fedzE7ZSZzdTLDyilewn4Jxm+7EO4AIGXMoImcsmdepjf9J7/AB4K7pfw1tsgnOhYFhAJy6DUTG/LSaDYZlVthlDAxrqOnnBIrVcQwQdrTqoDOklgRpmA/DBkbaeBoG0f8fbQKc96wzEAAkOO9OWZ2Bg86gvdrriSoupcGohgVbQxHnV27YR7kMNVCxy9z3ZPiWZqwvFcOPa92IU6a7AsTE9dWqhtpOHdoTduoMhUlwJBBG8mtDxO8RftkCe631H2rGdl8OfaJC6BgSTppHKtdxpst62w1hT8yKcvFP7FbOMYR3D/AO3/AM0DxKJg2u3QmYP/AJgWeZ7pBnYA5fUUTwXFJ3RgfMGrHFbC3rZBWdJG0gHeD5VNx9pb+GmGXrf9Y+z2qe9o5IMGERWJgHQmOQqW1xBrpyjWN9CI8DV3C9knsG3ibDkvBZVmJDA6TzBmiGF7lsvdMuxJIOkHpWGWTqxxoBf7tC75BdT0qxxDGZ2JG1U843NVLuIvaxjkF1UTL3g4YnNlhIOYTz5aUS4oyqFVW7iiEBMsZBGYnkAJgdWoOuIZGDo0GCCIBBHjVK/ednLuZNT687X78aQ8QtSSRtQ3A4U3XyICzuwVAOswPnV/G3yQa2H+EnAMztinHdtyieLkd5v9qmPNvCtsN2uXyaj0rs3wdMJhksrqVEu35nOrt67eAAqXieGS4VRgSxmMu8RBnw1HqKvGoMFeBVrh0EkAn8qEgEdQTJH9Vb6c+wkdlFgAPEADVVJ06nSait9lVzZvag8tEj1OaKMq73SWMpaHLZn+PJfrRC2mg2A5ACouMhzK0JscGtrsXPiY+1K7w8D3WUf1CfoRRZxPgPmarXsUimJE9Jk+gBqoN1nbqYwE5f4UjlJug/GBSo//ABB6H0b7UqXp+z9v1Hnf8bcGa01hwJ7sAnloqkeR+9V+PcXT+HtqC9pjcUNodMhmHJ1KkDfpNQ8WxWIlkZ8qLcCdzusVEH3iZmCPCgmPVnuROhuAS+oj3VkbaTv9Kxt0bdvika2XDZwwBAUggQORXb15VnMN2fGIRg5MlCZWCTIMQDvpO/hXOzpa3mtaSsmQRsSsTy58qOYGzNxckrBYbDQDTQ9COVG90A/a7BI2GthFYZCFOYETKbDXU7AkT8qp4bhTJkMd0wdw4zbSfEb66Vq+0FjOgG4VjMdRAgzUAswiq3cl5GgGpO3jsKLOQgGHXIlt5A7xgazEMNgQBufh41bXBguAh7kq6HVhI3503GuWAK6ENoxiYylSY6QTNXMDIcoRBU/IwdKZH4+2WCKujG4rE+Ka/oKvBRPjFVeJhgsoYaR8a7anPMzA1+n1BqglxGFDEEjb9d6ylrg5ELdIjM5UamMyOza/7Z1rb5dDVK8igktAABPloZ+RNOw48943hBbQAAEvcYmNO7FuAF/LJYVosBZzWEbn057AdPAUP7ZifZKoES9yRoQoQHL1g6HzUUX4S6rhw+YFQIXTf++2tROyofeXMzEad+NxMZ99PWKxfEUgMwGzx8iR+/GtjeTMiNBUmW25SzjKN4yroKzHFSQVSO6Qrf7szT4xvVUQd7MJoh8R9BRbi+JCXUJBPcMQJ/FQ/s6sInnVziWKVL6Egn/LMQJg5v7U/pX2fZ4svR/+LVfXFAxrueoGh86Ejiycw/nlND/43TXrRh9nWq49xqxbRclxCREqCJA8VoHx7GB0B8PqKEXOCYd39oFAMSwLN3idtzAAg+tR8Uv5oG0aAVz542XVduGcuIPfeKie93daffEUMxd6NKeLPK6Wv4muW7smKHG5XExMGr0z9hJ8MzsEQZmYhVHVmMAepr3/AIFwtMNh7dhNragE/mY6ux82JPxryj/C7BfxGMztGWwueJ1LtKppzA7zeBUV7RWnjnG2Xly3dKuOxS21Z3MKI+ZgR60PwV84g5iMtpdFX8x6eQqp2sRrrWMMhj2jl3PREGvzYR4ijWEtqigKIVRCjy/Wt5qY/th3V0rJVeQ1P6U97gHwqLPAL/yzXbC6An9nmazWja0ze8Sq/lGhPmeXkKellUEKoHlUly6AY59Bqf8Aqo2c+VHNBualUWalT0Hm3anCv7YuAMhVcxg6bqZI5kc+gp9jEoLTxBJYFTGYMREfHSY+tWeNYO890Ad9CZgSBH5WM+eoihS4d2yBhCFwndic2+nU6RNc+XFMWweFLupLqSCYIHe3BIJGo56noaJGxkzBMwZBM8mJ1ga6mreFwSBVhcuhBHPU8ydaa2GCkwQJkeUjSq0FbiLF0g90d0yecmPKuY+3GQgTBAB5S0Agz4T61cvFWQI2uynTmD/an3MMGQ6Scsemop6Ad/BSSHkgnTYCN+s+Go5Hwm/YswZ6+M+XwpI0hZ08+piB51PpTkCLEroPMVIopOs05aYPmqHELWdHUH3lKz5iKtPuDr08PTrUTmlTjNcR4WGdnb3bduABPvMuUaDfT9Kq8NwuWybbErlgHwLHUcjpqNehrSvaARxOpB18YrOYbEg2b7oNGOhY5pEm3vz939851oU93dkRhqoAiNwFB97bX7ViLeNuEkLECJY9O8wHqwrc4ZwuGkCR7ItHmCSPU1jsMfeTLByhh/xlSfHXXzp0NVwRYRR0Memld4niFW8M3+n0n8RpcH9xf6j9ar8UdPb9/wD0x1/M/Si9HOzLmPtw0EAkH8JGseVAluCdeu87fDnRPGXLeRspEweZnXzoIj6708RW67I+wzt7RUuAhDDqrKCXCAgEEA/5g9KFdvLdi1ecogRhAyIuRVUT38qgCTJOboBUXZs5rqgcyJHk6sfpPwr1DisOhQ94EQRyIOhBq7hMoMfJ628beBm9m1G1CrzgtW44j2MYPktX0AIJKkE5BuFzg97QfDqaHcN7MgOE7z3ScsQNGnYCfnNY3C49rucy6VuzfZK7i5Yt7K2DGcqWLN+VEkT5kgedEOM/4e3rALJcS6ByjI8f0yQT8a9c4bwxMPh0tt3ii6mdC7auR4Ek/CKyvHcQiGURF8s23PnFdGOEs5jLLK74ZTsbYa2txHUqzFXU7EhQe7O4IOvxrS8O7W4hbns1Ht1mApnNpuQ+8DqZqrh09pMNByxO+nX0NHOCcNTDg5dXYatGsdPKtZjJjIi3d2sDFNdxaPkZAqFIMbkkmCOW3pWnGgFCMLiADrRfMCNKnIQ9jKf7lH/sKnuExlXQ9eg6+NC3vZVI6/IgyKJI861nlNHKSWwo03O5OpJ6k1HcNSk1WuPRDR5qVR5hSqtJC8WCVjrvG8VBhcIFQAgGGLDQaSSfWp8TeyLmif70nvqF35TFY3W1n+2GoXf6VEtosW11n00FNwZBExr5fvyq1bWAR16aUdg1LUb1KRt4VFftShT3RlKiDECIBG0U5AAoA2AHyFOQiHIxHh96a+4866fqa5pQDia4ixzJ3+f2rhrtAMvNpVdn38P2afiNqgTnQuHkA6HnpWTxFprFjI0S1xzptlLSNOm/rWrBoXxO2XDZQMyyBMzqg2+PnSsFUbCf/wAyAf6UeYKHSgmPw+W4YUA6SfAHb0rQ4ZStsDYhWX0lR9KE8WcBzPP9ASfpSpLfCD3B5n61BxB09sc5A7i7/wBT1Lwg9weZqpxDJ7c5jHcWNY/E9F6OdhnEnQk5Dpl16TPKqGHbXlv8aJcVyBO6dSRznrQbCt3qcFaLs9eyYm20wM0T5giPjt8a9Nu3cw+FeRi5EEaEag+I2re8H4gHsowPh5RpH0rbBnTeJdw933ie8eg3g/zGBpyAjnUHCbKJiWud9ncADYqkAK5AncwNY5nrU+NcRpvyA69T4dBzPhrQ3DXAHQtpDb7wDp6SBr4Vr6y9o3Y2fELkKR4V57xq6ZIrb469CnY+cg/L7V5zx7E940uoafs3jR7QITqNvFT9ia2r6QRXmfBcTbtXg95CQVIDCZQnQNA3/Sa9FwWJBA1DKwkEGQfI1Pj8mOW5L0eeGWPafPIkeRqxYxzpyzJ05/ChOIVkJKGD8iPGuW+I8mEeH2rSxDUsmdCVM8xXeGXzBVt1j0rLfxboc9t/Mcp8RyorwzHfxGYGLbAAMZ0IPT0qLOFSjP8AGZ2Kp7q7nqa6wpWLCIkK6wNzp+lDH4sXb2eHGZubkd0fvxpSb6PYj7M9D6V2q2ayuj3++N+9zrtIBGPaQBymfMjlUSWSY/m3MT/0N6uXbeaJ2BnzqRUArCzdWjwyEaDUjQk/WrDGCKaiAbV1rkRT0RztXM1VlfePOmtfI3FGwsc/3ypTUFq9mJ8NPiN6lDTTB004mmTXHNAQ3npk1xjM09E0pKiNDrTblkZmJnUD5TUmSDXbw0nwoMFxVzKCeYB9YrP8RVmuzyyMJ5SSu/y+dHrr0Ideup61NC3wzaP5jVPHqPbnMYGQeGstU3BW0gnXMflSx7p7Zg5HuroTHNqV6E7BONKoQFSDLcjPKg2FfXWi3aMoAmSNZmDPSgeGI508ehRh3EVe7McSKu1onRtV/qA19R9KDm4AINUTcYMGTRl7w+Bq965LW3pLXvj++dVpOdWJ1ZlHwG/kIEesbVXOKEAggyAdNdwDHnrtVTFYohu8QG2Anbz6Hr00Hl0Y1jWn45ixbQkvscsaEkwSDB+def4rFF3ltI1AgADxgc6PYXiGFe6bmIxCNB7qDMRpAzMQIO23r0rJYnFhndgd2J+E1z/ycs7NY/bfwTCXeV6PxLT6dY5nn8R8qKdmOMmyzWiyhLhBEEtDzvzgaCaHXsOMqEFGzLOjBoM6qyzKsIEedUcssFAmTt7iyDpO2v8AeuXD2wsrfPWUeppxkgQ6B1/Mo1HmK7cW3dEowmszwLEFSLJhXy90Bw6MB+EsCcra6Hz00o2EsOcuZrd3oe6Z6dGr0sM5ljuOLLG43VVbilDGoPyNds4jvADc6R1nlUmJDoIdc6/mG9VMHiVFxGB2Yb6HwqktMtpnIw9vumM1594/lHU6xRfD8PhRbtkon4mHvv5mq/Z+0yozqASzaz0X+5NG7eKP4kI8tajK2XUVIprwOx+WfOlRH2y9DXandPUZu7bdph8s7QBpXHvEQAS0bzzqWZ0qO4qr3oPIaT1rGxR2DuEqM0kjSTAnxgaVagVBbWKmzU4HAAJqJmp2feoZoDq7nSpBUYNPmgHE0y41dZqgumgRGsn1q9ZTSqdoUTsjSkpVuLrVTiF0qjlRLBSQOp5Cr9+ql06GgM3aQokHcT9yJ56zrQ65iu/kI1kDw1B/UH1HWil0cvP61Xt2lLAnr+hioUnwid0aU+5aU6lQfEirWGTu7RqT8J0p7pUhhu1qKrIFAHdJMef9qA200r0TinAUvkMzMCBAykbTOxB60Gudko2uaeKcvMGqlgZpELEKNz+9aJ2bCoNNTzPM/ap8Rws2BmLBp00ER8/3FUv4iN66vDjNbcvmyu9JnT4fGKS4BWGvz1qumJE61ZTGryrpx057XDgOgFRXMJ1NW04gP3FNvYpTVyRNoZcsxVW+howYPPfbz5j9agdAPLnpSuMsEysBvbunuswjoSNq3nBOMJi0yuo9qgE+XJh1B6cj8KxuKw4Gg15g9R9xtUPDcUcPeS5rCnXxU6MPST5gVjfHMbuRvh5Llxa9KtY2O6xruJwVu5qN+oqljcUrJnQgzHKQw66UPt4111j7UW/lo9M7OMfYqp3Eg+Ou9GHcLudayPZLiDvafKveDwOmoE1obGGI1YyayynO1yrPtPClTc69aVLQAUeRpUmaqWGJy6iPjNWVas1JwaWaoS1LNQD5qOaQaombekEwNdB1+FQoakDUA5zVW9cipnaql1qQixYNELT6ULRqmF7ShS3feh7voa692ahDUAIvv+tLBWA5EyArZtPBSoB8Nac9qTHjXcZcFhVUe8xGnyUev61F4PsQfEkMVAEACT4nWPSPXwqBuJDNGX0P9qrteyJqZPXqTqT60NRqhQ8OIIRqp+X3pr4q2eo+H2oE1zXypjXjT2NLXFhbu22VXGYaruNRy16iRWAx90qwPLY1qw3Oh/EuHI6zsx9D51r4/J68Vj5PHvmM7nb/ALpe1brVbFWShjUEcidPMVXL10fKx+MS9uRyrgxR5z/bpQ8XTyJqXDh3IVRJp/MPi2IWsV49Nfo1StiufXQ+daLg3+HWJxFsOWS2pHdzZiWHUADRfE03Gf4cY9JyrbuD+V4J6e+FE/GtMfNLEZeGys0b525jUa+o+NQXXB1FEMT2axqe9hrsjmqFxp4pIqTDdk8c4lcO4B1AYoh8e67A/Ki57OYaVOFcRa06jOVQHXTNAPPLzA5jwra2+LspC3bSvOzLsw3lZ0YR0NZJ+ymNT3sNcEaaAN9CZqxgMTjcP3DYuNbH4HtOV6mDErrJkdancXNx6VwK7bdO4CqhjmBBGsDcelaLVRAY61i+x3HrbPke1dtl9IZGIDDo0befStwYUSil/Gdqm3lUM9gedKoWxlz8g9KVGqNwEw1xiJYQelWQ1VEepA9YNFma5mqHPXA9AS5qax1qMvTS1IJp0qVTVYPThcoCS41VXbWpHaoC1KiJC1MN2mO9QM9C0wu1PY3obmolghJAFIJLFoLmdth+lZl7hvX2c+6hgf1EfoNPjR3tPjMlvIup0AHViYUfrQjD2giAHzJ6k6k+tZ5U4gxrycoNMtmos+ZifGpV2pm4zTTWQwTT0TSldQxpUhClnrTMSndH76VYzkb1XxriB++lACcdhVde8J+orNYrCZSRv9a176igfEE7x/fKnjlYVxlAGStd2I4er3baP+NxP9I1I8NAfWgzYZWAbYjfxq9hMY9l0uIdUIaORjcfESPjTucuv+qxwuO7/wCPohLgjTbwpXHFYThHa1Lyypg81PvKfEUZXigaBOpMV1zGXmOa3XYvevgAn8K+pPQU1JAJPvHfw8Kq3bkhegdac93eq1wW0zWwaY1oVEL9I3qOQecOscp6xMfCoXUo2YMV11IGn+5eY8dxTjeqg95g7EnumBrtJ0g+BIH/ACpyFV7/AMsnUUqHMLZ3TX1pVXrC9qFo/XQwJ5/908XdYpUq5Wx2akWpUqAje4ZArrPSpUg6HroelSoDjPUTPSpUqIjd6he5FcpUlGZ9aMYS4LaFj0/fzrlKlej+wJrxu3pO1vXzZvsJ9R0pcRvQsDn+lKlUmoWBU/KlSqQ7NJn+v0pUqDdZ9pqrxGyDljxpUqCD1tkb1R4jb1HlSpUGH2/dYHlt8TSDkLFcpVn+W06iliLroyspK8wQda0HB+2LpAunUbOBPqv6ilSrp8dsnDmz5rc8K4240uMGtuAVYAggnnG8HTTlRq/iiNeu/nXaVdePTC9olxc07+JpUqCNOJqHFYglWXkwg/oaVKgKdvGNA1pUqVWH/9k=",
      },
      {
        id: 43341859,
        englishWord: "stale",
        englishExample:
          "I went to the local baker and took their <em>stale</em> bread.",
        russianWord: "чёрствый",
        russianExample:
          "Я сходил в местную булочнуюи забрал <em>чёрствый</em> хлеб.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43341848,
        englishWord: "stale",
        englishExample:
          "In these types of situation the newspaper provides <em>stale</em> news to the readers who have already accessed the online news.",
        russianWord: "устаревшие",
        russianExample:
          "В подобных ситуациях газета предлагает <em>устаревшие</em> новости тем читателям, которые уже получили доступ к новостям онлайн.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43341837,
        englishWord: "stale",
        englishExample:
          "That's why you have considerably less crema if you use old, <em>stale</em> coffee.",
        russianWord: "несвежий",
        russianExample:
          "Поэтому у вас есть значительно меньше крема, если вы используете старый, <em>несвежий</em> кофе.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43341824,
        englishWord: "spoiled",
        englishExample:
          "Two-thirds of parents think their own children are <em>spoiled</em>.",
        russianWord: "избалованы",
        russianExample:
          "Более того, две трети родителей признают, что их дети <em>избалованы</em>.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43341778,
        englishWord: "spoiled",
        englishExample:
          "We mostly live off bread or <em>spoiled</em> vegetables from the market.",
        russianWord: "испорченными",
        russianExample:
          "«Еда для нас - роскошь, мы, в основном, питаемся хлебом или <em>испорченными</em> овощами с рынка.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43341772,
        englishWord: "spoiled",
        englishExample:
          "Plus, how to get a compensation for a <em>spoiled</em> vacation.",
        russianWord: "испорченный",
        russianExample:
          "Плюс, как получить компенсационную выплату за <em>испорченный</em> отдых.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43341753,
        englishWord: "mouth-watering",
        englishExample:
          "The preservative gives the product a pleasant pink tint, <em>mouth-watering</em> smell and taste.",
        russianWord: "аппетитный",
        russianExample:
          "Консервант придает продукту приятный розовый оттенок, <em>аппетитный</em> запах и вкус.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43341740,
        englishWord: "browse",
        englishExample: "Come in and <em>browse</em> our catalog.",
        russianWord: "ознакомьтесь",
        russianExample:
          "Заходите уже сейчас и <em>ознакомьтесь</em> с нашим каталогом.",
        association: "",
        groupId: 1676189101146,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43341699,
        englishWord: "work through the food",
        englishExample:
          "Lawyers are not trained to help you <em>work through the</em> emotional journey.",
        russianWord: "справляться с",
        russianExample:
          "Семейные адвокаты не обучены помогать <em>справляться с</em> эмоциональными проблемами.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43341580,
        englishWord: "eat a horse",
        englishExample: "Hungry? - I could <em>eat a horse</em>.",
        russianWord: "съесть лошадь",
        russianExample: "Я готов <em>съесть лошадь</em>! (англ.).",
        association: "",
        groupId: 1676189101146,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43341566,
        englishWord: "cutlery",
        englishExample: "That's not a weapon, that's <em>cutlery</em>.",
        russianWord: "столовый прибор",
        russianExample: "Это не оружие, это - <em>столовый прибор</em>.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43341512,
        englishWord: "decanter",
        englishExample: "Mark, two glasses and a <em>decanter</em>.",
        russianWord: "графин",
        russianExample: "Марк, два бокала и <em>графин</em>.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43341450,
        englishWord: "go for",
        englishExample: "You can also <em>go for</em> roses and other flowers.",
        russianWord: "выбрать",
        russianExample:
          'Также можно <em class="both">выбрать</em> розы или другие цветы.',
        association: "",
        groupId: 1676189101146,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43341442,
        englishWord: "go for",
        englishExample:
          "So I decided to <em>go for</em> something closer to reality.",
        russianWord: "выбрать",
        russianExample:
          'Поэтому мы решили <em class="both">выбрать</em> что - нибудь, более приближённое к реальности.',
        association: "",
        groupId: 1676189101146,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43341407,
        englishWord: "picky eater",
        englishExample: "Is your child an extremely <em>picky eater</em>?",
        russianWord: "придирчивый едок",
        russianExample: "Ваш ребенок - чересчур <em>придирчивый едок</em>?",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43341402,
        englishWord: "picky",
        englishExample:
          "I did not find flaws, although I am a <em>picky</em> person.",
        russianWord: "придирчивый",
        russianExample:
          "Я так и не нашел недостатков, хоть я и человек <em>придирчивый</em>.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43341397,
        englishWord: "crunchy",
        englishExample:
          "This <em>crunchy</em> vegetable with a taste of licorice serves as an excellent addition to salads.",
        russianWord: "хрустящий",
        russianExample:
          "Этот <em>хрустящий</em> овощ со вкусом лакрицы служит прекрасным дополнением к салатам.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43341379,
        englishWord: "chewy",
        englishExample:
          "Some like crispy insects, while others prefer a soft, <em>chewy</em> texture.",
        russianWord: "жевательную",
        russianExample:
          "Некоторые любят хрустящие насекомые, другие предпочитают мягкую, <em>жевательную</em> текстуру.",
        association: "",
        groupId: 1676189101146,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43341359,
        englishWord: "poached",
        englishExample:
          "This is really amazing creature resembles a fried egg or <em>poached</em> egg.",
        russianWord: "пашот",
        russianExample:
          "Это удивительное существо действительно напоминает жареное яйцо, или яйцо <em>пашот</em>.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43341351,
        englishWord: "greasy",
        englishExample:
          "You'll feel better after you eat something <em>greasy</em>.",
        russianWord: "жирное",
        russianExample:
          "Тебе станет лучше, после того, как ты съешь чего-нибудь <em>жирное</em>.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/12/11/istock-513552064.jpg?quality=75&width=1200&auto=webp",
      },
      {
        id: 43341342,
        englishWord: "stodgy",
        englishExample:
          "We're all getting a bit <em>stodgy</em> in our old age.",
        russianWord: "скучными",
        russianExample:
          "К старости мы все становимся немного <em>скучными</em>.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "https://thumbs.dreamstime.com/b/i-fed-up-learning-28602352.jpg",
      },
      {
        id: 43341338,
        englishWord: "stodgy",
        englishExample:
          "The result is a very <em>stodgy</em> layer of sand and clay, which is twice as dense as the original quicksand and packed tightly around the trapped body parts.",
        russianWord: "тяжелый",
        russianExample:
          'Результатом является очень <em class="both">тяжелый</em> слой песка и глины, который в два раза плотнее, чем зыбучий песок и части тела оказываются плотно упакованы в этой ловушке.',
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "data:image/jpeg;base64,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",
      },
      {
        id: 43341315,
        englishWord: "savoury",
        englishExample:
          "A large selection of big pancakes with different fillings, both <em>savoury</em> and sweet.",
        russianWord: "солеными",
        russianExample:
          "Большой выбор блинов с разными начинками - <em>солеными</em> и сладкими.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "https://sunbeam-app-prod.s3.ap-southeast-2.amazonaws.com/Waffles-savoury-900x900_080f70d4b0.jpeg",
      },
      {
        id: 43341301,
        englishWord: "appetizer",
        englishExample: "It is a popular <em>appetizer</em> or main dish.",
        russianWord: "закуска",
        russianExample: "Это популярная <em>закуска</em> или основное блюдо.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43341293,
        englishWord: "complimentary",
        englishExample:
          "The hotel provides a <em>complimentary</em> continental breakfast.",
        russianWord: "бесплатный",
        russianExample:
          "Отель предлагает <em>бесплатный</em> континентальный завтрак, здесь нет ресторана.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43341284,
        englishWord: "get seated",
        englishExample:
          "I arrive at the restaurant and <em>get seated</em> at a table.",
        russianWord: "сажусь",
        russianExample: "Прихожу в ресторан, <em>сажусь</em> за столик.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43341195,
        englishWord: "wait to be seated",
        englishExample:
          '"Please <em>wait to be seated</em>" means "Please <em>wait to be seated</em>."',
        russianWord: "ждать, пока вас разместят",
        russianExample:
          "«Please <em>wait to be seated</em>» (англ.) - «<em>Подождите, пожалуйста, пока вас разместят</em>».",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43341141,
        englishWord: "waitress",
        englishExample: "I had a short stint as a cocktail <em>waitress</em>.",
        russianWord: "официантка",
        russianExample:
          "У меня есть небольшой опыт работы в качестве <em>официантки</em> по коктейлям.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43341131,
        englishWord: "waiter",
        englishExample:
          "Think a <em>waiter</em> earning more than the chief of police...",
        russianWord: "официант",
        russianExample:
          "Подумайте о том, как <em>официант</em> зарабатывает больше, чем начальник полиции...",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43341122,
        englishWord: "family owned",
        englishExample:
          "The quality is good and the company that owns this brand is <em>family owned</em>.",
        russianWord: "принадлежит семье",
        russianExample:
          "Качество хорошее, а компания, владеющая этим брендом, <em>принадлежит семье</em>.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43341102,
        englishWord: "fully booked",
        englishExample:
          "We're <em>fully booked</em> tonight due to a Groupon deal.",
        russianWord: "полностью заполнены",
        russianExample:
          "Сегодня мы <em>полностью заполнены</em> посетителями с купонами.",
        association: "",
        groupId: 1676189101146,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43341074,
        englishWord: "pastry",
        englishExample:
          'As a result, your favorite <em>pastry</em> consists of "empty" calories, starch and yeast.',
        russianWord: "выпечка",
        russianExample:
          "В итоге любимая <em>выпечка</em> состоит из «пустых» калорий, крахмала и дрожжей.",
        association: "",
        groupId: 1676189101146,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43341060,
        englishWord: "posh",
        englishExample: "She's got a new job, <em>posh</em> hotel opening.",
        russianWord: "шикарный",
        russianExample:
          "У неё новая работа, там <em>шикарный</em> отель открывается.",
        association: "",
        groupId: 1676189101146,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43341036,
        englishWord: "starving",
        englishExample: "He was <em>starving</em>, he had no money.",
        russianWord: "очень голоден",
        russianExample:
          "Он был <em>голоден</em> и не имел при себе никаких средств.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43341017,
        englishWord: "feel a little bit peckish",
        englishExample: "Well, I do <em>feel</em> a <em>bit peckish</em>.",
        russianWord: "немного проголодался",
        russianExample: "Да, я и вправду <em>немного проголодался</em>.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "data:image/jpeg;base64,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",
      },
      {
        id: 43340995,
        englishWord: "grab a bite",
        englishExample:
          "Town's not too far if you want to <em>grab a bite</em>.",
        russianWord: "перекусить",
        russianExample:
          "До города рукой подать, если вы хотите <em>перекусить</em>.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "https://i2-prod.bristolpost.co.uk/incoming/article1965508.ece/ALTERNATES/s615/0_GettyImages-477177602.jpg",
      },
      {
        id: 43340989,
        englishWord: "eat out",
        englishExample:
          "Venezuelans like to <em>eat out</em> (and often with the whole family) and meet friends at restaurants.",
        russianWord: "питаться вне дома",
        russianExample:
          "Венесуэльцы любят <em>питаться вне дома</em> (зачастую - всей семьей) и встречаться с друзьями в ресторанах.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "https://images.ctfassets.net/yixw23k2v6vo/24ktaCncOKJKH39pZht0nD/374adf0cd43a87a881289f67307ab12f/iStock-1181396290.jpg",
      },
      {
        id: 43340098,
        englishWord: "courgette",
        englishExample:
          "And so, there's not a sign of an aubergine, right, not a <em>courgette</em>, not a tomato, not a carrot.",
        russianWord: "кабачок",
        russianExample:
          "А баклажанов нигде не видно <em>как и кабачков</em>, и томатов, и морковки.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "https://images.immediate.co.uk/production/volatile/sites/22/2019/11/Courgettes-a708776.jpg",
      },
      {
        id: 43340048,
        englishWord: "scallops",
        englishExample:
          "Shrimp and other seafood (squid, <em>scallops</em>, octopus, etc.).",
        russianWord: "морские гребешки",
        russianExample:
          "Креветки и другие морепродукты (кальмары, <em>морские гребешки</em>, осьминоги и т.д.).",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "https://thestayathomechef.com/wp-content/uploads/2022/02/How-to-Cook-Scallops-4-500x500.jpg",
      },
      {
        id: 43340036,
        englishWord: "octopus",
        englishExample:
          "Plus there's an <em>octopus</em> that plays the drums.",
        russianWord: "осьминог",
        russianExample:
          "Кроме того, здесь есть и <em>осьминог</em>, который играет на барабанах.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture: "https://m.media-amazon.com/images/I/61tMZgSPsxL._SL1000_.jpg",
      },
      {
        id: 43340026,
        englishWord: "clams",
        englishExample: "I like <em>clams</em> and free pizza.",
        russianWord: "моллюсков",
        russianExample: "Я люблю и <em>моллюсков</em>, и бесплатную пиццу.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "https://static.onecms.io/wp-content/uploads/sites/34/2022/08/05/how-to-clean-clams-mussels-0822.jpg",
      },
      {
        id: 43340015,
        englishWord: "eggplant",
        englishExample:
          "They say that an <em>eggplant</em> has lots of nicotine.",
        russianWord: "баклажанах",
        russianExample: "Говорят, что в <em>баклажанах</em> много никотина.",
        association: "",
        groupId: 1676189101146,
        done: true,
        picture:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Aubergine.jpg/640px-Aubergine.jpg",
      },
      {
        id: 43340005,
        englishWord: "aubergine",
        englishExample:
          "When you cook the <em>aubergine</em>, you neutralise the solanine and this will prevent you from getting stomach pain.",
        russianWord: "баклажана",
        russianExample:
          "При готовке <em>баклажана</em>, вы нейтрализуете соланин, предотвращая болезненные ощущения в животе.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Aubergine.jpg/640px-Aubergine.jpg",
      },
      {
        id: 43339963,
        englishWord: "oysters",
        englishExample:
          "Maybe you've heard that <em>oysters</em> are aphrodisiacs.",
        russianWord: "устрицы",
        russianExample:
          "Наверное, вы слышали, что <em>устрицы</em> - это афродизиак.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "https://www.thespruceeats.com/thmb/hM29c6amtntWC69qCqVv6LF73v4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/oysters-kilpatrick-recipe-256024-hero-01-bc0816952ff34365a1b855460bc2b1e3.jpg",
      },
      {
        id: 43339952,
        englishWord: "seed",
        englishExample:
          "GMO <em>seed</em> may mix in with organic <em>seed</em>.",
        russianWord: "семена",
        russianExample:
          "ГМО <em>семена</em> могут смешиваться с органическими <em>семенами</em>.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "https://cdn.britannica.com/89/95389-050-720343DB/Stages-germination-bean-seed.jpg",
      },
      {
        id: 43339901,
        englishWord: "stone",
        englishExample:
          "Apricot <em>stone</em> is about a quarter of the size of the fruit.",
        russianWord: "косточка",
        russianExample:
          'Абрикосовая <em class="both">косточка</em> составляет около четверти размера плода.',
        association: "",
        groupId: 1676189101146,
        done: true,
        picture:
          "https://media.istockphoto.com/id/174287318/photo/kernel-of-apricot.jpg?s=612x612&w=0&k=20&c=umI5hA_TExKYILZxpuytdzpXsUP0gFijASALvI0Yi7E=",
      },
      {
        id: 43339863,
        englishWord: "shell",
        englishExample:
          "Each egg is surrounded by a nutrient <em>shell</em>, around which a dense <em>shell</em> is formed.",
        russianWord: "скорлупа, оболочка",
        russianExample:
          "Каждое яйцо окружено питательной <em>оболочкой</em>, вокруг которой формируется плотная <em>скорлупа</em>.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "https://maxdemarzidotcom.files.wordpress.com/2017/01/sea-shell.jpg",
      },
      {
        id: 43339829,
        englishWord: "mild",
        englishExample:
          "He had <em>mild</em> symptoms, and was placed in home quarantine.",
        russianWord: "лёгкие",
        russianExample:
          "У него были <em>лёгкие</em> симптомы, и он был помещён на домашний карантин.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture: "https://static.toiimg.com/photo/91488832.cms",
      },
      {
        id: 43339825,
        englishWord: "mild",
        englishExample:
          "Istanbul has mostly <em>mild</em> weather and can be visited year-round.",
        russianWord: "мягкий",
        russianExample:
          "В Стамбуле в основном <em>мягкий</em> климат и его можно посетить круглый год.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "https://www.pricestickers.co.uk/wp-content/uploads/2018/06/Mild-Medium-Hot-Website.jpg",
      },
      {
        id: 43339817,
        englishWord: "bitter",
        englishExample:
          "Now they have to swallow another <em>bitter</em> pill...",
        russianWord: "горькую",
        russianExample:
          "Так что и здесь им не подсластить очередную <em>горькую</em> пилюлю...",
        association: "",
        groupId: 1676189101146,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43339792,
        englishWord: "rude",
        englishExample:
          "Another <em>rude</em> and impolite gesture - to point person with chopsticks.",
        russianWord: "грубый",
        russianExample:
          "Еще один <em>грубый</em> и невежливый жест - указывать на человека палочками для еды.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRUVFhYYGBgYGBwaGRgZGhgYGhkcGhwaHBwcGRocIy4lHB4rHxodJjgmKy8xNTU1HSQ7QD00Py40NTEBDAwMEA8QHBISHDErIyE0NTQxNjQxMTQxNDE0NDExNDE0MTExNDE0MTQxNDQ0MTQxNDE0NDE0NDQ0NDQ0MTE0Mf/AABEIAOAA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYDBAcBAv/EAEUQAAIBAgMEBwQHBQYGAwAAAAECAAMRBBIhBTFBUQYTImFxgZEyUqGxBxRCcpLB0SNigqKyFTNzwvDxFiRTY9LhNEOz/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAEDAgT/xAAgEQEBAAIBBAMBAAAAAAAAAAAAAQIRMRIhQVEDEzIi/9oADAMBAAIRAxEAPwDqcREwakRIbpTtY4bDl0tnZgiX1AJuSbcbAHztAmGYAEkgAaknQADiZoU9s0HSpUSorrTBL5dSAATu77G3OUGh0irVcPVwzl6lSoVFNrXJUm7qbcLD4ngJCZ6tE1KeqF1yOumqmzeHIgjn3y6F02R05DO4xChF1KFAzW/cbfc9+kw7N6YVKmLQOUSgxYZSFFhlYqWc8bgcba+cqBwdQJ1mQ5Pe04mwNt9r6Xta+k2MPswtkzuqGoQKasCWfMbKxA9lCftHfwBgX/ZvSpK+JNBE7FmyVL+0VFz2baKRex7hz0mlx9M1DRDqagXMUGpAFt/AbxpvnIsBTcWqq/VKCR1lyNbahMvac2O4edpM7HqNhMQtUI9VKiKuYqUIaqVYAntDPoNL65oHTYnpnkgREQEREBERAREQEREBERAREQEREBERARE9gYKuKRGVGdFZvZVmUFvAE3M5x0n2rV+s1ab9umrgCmwFrZRYq1ro1jfMOfEaSK6QVmfE12fU9Y6+CoxVR4AATXxeKapkL6sqhS+uZwPZLX3kCwvyAlG1iSlJClNw5qXJcbxS0yIfdY6lx3KN1740xiZUz087oMqEvZCt7qHUC7hSTazLcEA6CaMSjfw20Sr1HdBVLqAQxsLqyOtwBqoKAZBYW00EwpjXFTrWOd7kkvcgkgjWxB3HSxFrC26a0GBmr4pnYM9jawC2ARVG5VVbBV7haTOxdrM+Np1KjKoZsrblQKbkCx3APla/MXvfWRP9n1M60yhVyM1m7NlsSWPJQAbnhY8oxWFyMArZ1ZM6sqsLqLhjY6ixVgfCQdjwuKSoudGDrcrmGoupsbHjrxmaULoZ0jp00TDOr5i9kZRmB6xtAeI1PfpL9IPIiICIiAiIgIkL0g6R08KMp7dQi4QG1hwLn7I+JlDxnSzFub9ZkHBUAUDz3n1gdWiclp9J8Yu6ux+8Eb+pZuYfpri19oo4/eQD4raXQ6dEqGC6bCyGvRZEe4V1Odbg2Nxa4ty1PdLZSqK6h1IZWFwwNwQdxBkH3ERAREQEREBPZ5PQYHONs7Oo4hcTiaDtnR3NSk2XcDYultbG2bW/EaESpyY2zsCtQz1HUBOtZFN9SLkq1vdIEh5Qibj7NcKjCzZ8oyqbspqaoHFtMw1E23+rU6xZTUIpubIQhDlG07eYdgkC/ZvbnvlGDDYXI1Y1kv1S6o2Ze2zBVUlSDxLaH7N90B6FM50vUa90V1sqce3r+0YchZTa5v7M1q2MqOoV3ZlBuFJJAPMDzPheYIG7SxzsCj1WVHLFmChjdjmN7WYqW1IB5mxM2cPiauGsGu9B862Rz1bh1ZWyuBoe1exFwQLiRMktnUnFKtVWoiqmUNTex6zMbW6s6Nbv77SCU6P7Lq/WKdbDBalMPbO9hkFu0HXQhwrb1uCbETpspfQDEoxrKishIR2S90BFwWQk5rG40N7WGp4XOShERARMGMxlOkueo6ovNjbXkOZ7hKltXp2i3XDpnPvvdV8l3nztAt2JxSU0Lu6oo3sxsP8A2e6U7bXTgWKYYEn/AKjiwH3EO897ehlO2htGrXbPVcueAOir91RoJqy6H1VqM7FmJZmNyxNyTzJMy4bBvUvkQtbfbhfdME8Yd15RvHZGI39RUI5imzfITUqU2Q2ZSp5MCp+MkNpYhkqNTpuyJRbIoUlRmQ2ZyBvZmBNzztuEzbR2lWDoy1HXPTR2VWITMw1sl8oB32txkEfhcY6XCkZW9pGVXRuWZGBBPfvE6B0BxzVKVRSqqqOAuQZV7QuRa9hrrpzlD/tJz7Qpt96lSJ9ct5bOiPScl0w9RURW0RkUIA3BSBob7r87b7wL1ERIEREBERAREQOY9OMVV+s1KbO2QFHRCeyOwozAeOb4zRqbHFOlRq1nZFqZiECHOQp+ydwJBBu1rX47p1PEbPpO6u9NHdPZZlBI48e/WVr6RqN6FN/dqWPgyn81EootTaDl3dWKF9LISoCgAKmm9QoA8pqxEoREQE8tPZt7KwDV6qUlKqz3sWvbRS3AHgIEx0FxWTFqvB0ZPO2YfFfjOnyobH6Eik6VHrMzIwYBAFFxrqWuSPIS3zkJhxmKWkjVHNlQEk+HAcydwHMzNKL9Iu0fYwyn99/iEHzPpAq22tqviahqPoNyJfRF4Ad/M8TNCInQREQEGIMCRpJqtaq4BYllDJ1jPYkFmTQZcwI1OpB32n3jaNPOS9aoSwVgy0UyspUZbftBYW0tbS1uExbWQmrZQSpVBStc5kChUK87ga245uN587SGXq0PtJTCt3MzO5XxGcA94Mg+fq9I+zWsf36bKPVC/wAp9UMJUWrRW3ad0yMCGVu2AGVhoQD6cZpSe6IbQCYimjgMjuMt9cjsMquvI65T3EchA6qZ5ESBEgdtdJqWHqJTJuxIzkDNkXfqBvY8BwvfxiafTRHrEsWp0UUkDLmeqx0F7aIoFza/K54QLrEqP/HuH/6db0T/AM4gW2IiAkb0iwJr4arTAuxXMg/eU5lHmRbzklEDhoiW/pl0bZHbEUlujEs6jejHewHuE69xvwlQlCWLo/0WbFIanWoihipFi7AjmLgDQ33yuyQ2NtephnDobg6Oh9lxyPI8jw9QQth+j9baYhr/AOGLf1Ta2F0POHrpWNUOEzWUIVJLKV35jzlh2XtFMRTWohuDvB3qeKsOBH/ubcgRILaj7QQk0Vw9ReAKujjxu+U+IPlK1j9v7TS+dDTHNaVx+JswgXvG4tKSNUc5VUXJ/IcydwE49tPGtXqvVbe7XtyG5R5AAT3HbTrV7dbUZ7bgT2R4KLAHympKEREoREQERAtxNhxPIQN/AbOZyjF1pKzWR3JBY3t2FGpAP2tFHOfD4eiCVNR1IJBzUgACNDfK5I17jPraqs+IqJbXOaaLuCqpyoo5KFsB6z42rUD1qrLqC7WPPW1/Pf5wPTs1yCUK1QNT1ZzMB30yA48ctpt9E8J1uKojgrZ28Kfa/qyjzkQrEEEEgjUEaEHmDwnQegGJFTrmZR1oyBqlu06nNbNza4NzvOl7kXkFxkH0s2x9WokoQKj9lONvea3cPiRJ2cm6XbR6/EuQbon7NOVlPaPm1/K0ghnYkkkkkm5J1JJ3kniZ5NvEYZEX++V39xFLKNeLkgE/dDDvmpOgiIgdyiInIRE0Np4oqMqnU7zyH6yybunOWUxm6z1cUASo1IGvd3eJ5Sm4/YVGqS1jTc72QDKfGnu9CJMs2VVtvJzfGw+RPnFSnduz9oZhyF9T5DX0msxjG55eFQq9EqgtlqUyCLi+dTa5G7KRw5z5p9EcQxsGpH+Nhv8AFZdMSlyMpuAFXvGgtp3zxFAum8lTc8LixAH4bX5mTpi/Zdo3o30bxWGqZ+sp5To6AuwYegsw4GXGRWAx5uEc3vub8jJWcZSxrjlMpuE9E8icukdtLYeHrg56a5vfUZXH8Q3+d5SNr9Cq1O7UT1qctA48tzeXpOkRA4c6FSVIII0IIIIPIg7p5Ou7d2FSxKEMArgdmoB2l8feXuPwnMtsbGq4Z8tRdD7LrqjeB4HuOsoj4iJQmbDYV3vkW+UXYkhVUc2ZiAPMzDN1gfqwI3Gs2fxCJkv6vbzgbiUsSUH7NKyKMgNqVYrpoodSWFhuF5FVqDp7aMn3lK/MTYzKlFlzKz1GQ5Rc5FTOe0SLZiWXQXtre26Y8Pjaiew7qOIDEA+I3GBry/8A0b0SErORozqoPPKDe3hmlOTGoxHW00YcWQCm/iMtkJ+8pnXsHhkpoiIuVFFlHId/fJRr7bxfU4erUG9UOX7x0X4kTjc6h08e2Dce86D+bN/lnL4g28c9ArTFJHVgv7QuwbM2mqgbhv8AUcpqRNnaNJUqOig2Q5CTvZl0Zu67A6crSjWiZusT3P52/SIHbIiJyPmq4VSx3CV92Z35ljum/tir7KeZ/L859bKoWBc8dB3DiZpj/M2wy/rLXpH4tMrZfdCj4C/xnx1py5eHxte9r8rxVfMzNzJM+QL6c9Jp4ZW9+zLVcq5ykjQL6AD8p8UWsynkwPxn3iF1Zrixdra6799uUwxOC8slemUYqd4/0JO4WpmRW7tfEaGamPo50VxvCgnvBF/hPdjvdWXkb+v+04y7zbXCdOWvaQiImTciIgJjr0UdSjqrKd6sAQfIzJECr4/oRhnN0L0jyU5l/C2voZFv9H7fZxC+dMj5NL5EDnz9AKtuzWQnkVZfjrNd+iuOoAtTIYH2hTc6295GAD792s6TEuxx/EYusmlSkinjnw9JSf5BNWviVcf3aIb+0mcX7spYr6Abp2l1BFiARyOo9JoPsPDMbnD0if8ADX9I2OcdE9kNiK6G37NGDO3DTUJ3knhyvOsTHSpKihUUKo3KoAA8AJjr4pE9o68hqfSOUtk5Vn6Rb/V6dt3Wi/4HtKb0f2O2KqFFcJlQuWIJ3EC1h3sJ0HapXEIyOMqMNAPbv9lhysR56jWU/wD4fxNJy+GcvoRdGyVMp3gqT4biZ102JM8b2QbIaVRlZVZkdlIYZlJUlTppcXExVqpdmdjdmJZjzJNyZMYbotjHaxpFb72chR4nUk+QMt+xOhlKkQ9U9a41AIsinuX7XifScunNsp5H0idxtEbCImDHVMqMe6w89Ik2luptEVD1lTTcWsPAafLWTFcBUYDQBCB6SM2TTu5Puj4nT5Xkjj2tTfwt6kCaXmRlh+bl7QEy4b217jf8Ov5TFMlH7R5Kfj2fzmlYTl8mmQA1tDex8N8+Z9MWsAb2G4Hv5T5gqwYM5qaX923pp+Ujtndmoy+I9P8Aab2zT+zXz+ZmhUOWvf8AfHxt+synNje8SpmIiZtiIiAiIgImPEVlRWd2CqouzHQADiZpYXbKVSwphnCi5YFLAWJF1zZwDa2qwiRnshX2m53AL8fnNZ8Q7b2J8/ymkwrO/Lj4T71lX2mA8SJp19pqNFGbv3D9TIhVJ3Ak92s2qWznbeMo7/0l6cZy5+zLL8x81sc7cbDkunx3zGigDMdfdHM8Se4fOSH9nogLOxIHkP1kebuTYW+AUfkJ1LPDjKZT9cvFUsSSe8seH+uU39lqCxI0Vd3Mk8T32v4XmhUcWCjcOPM8/wBJL7LSyA+8SfyHykyvZfjm8m5ERMXpIiICR+2H7KrzN/T/AHkhIba73cDkvz1/Sd4zuz+S6xbWyEshPM/Af6MybUP7M+I+cy4SnlRB3a+J1PzmttduwBzb5AxzkWawQ8yU/Zc9wHmWB/IzHMi+y33l+TzavNHlRmJGa+gAF+XCfE+6jljdjcz4gqc2X/djxPzmhtMWqX5gH8vym7sk9j+I/lNfbKaoe4j01/OZT9N7+Ilp5Pigbqp5qPkJ9zhqRESKREQEgcDha6VHXMSMwOZky02DKCztY3dzfIFzBVC3sNBJ6IGoNnU/dPqZkXBoPsDz1+czxL1Vz04+niqBoAB4aT1jbU8Ikft3EmnQqOBmKoSFuFvbfck7gN9teWsitfF189sxyoNQPtN324eJ+M1Xq3GUDKvL8yeJmpszF/WUFUWUklXBNgrixNr/AGSCCPG3Cbl1Xd2jz+yPLj5zfHWuzzZb3dvKdIm19ATa/PuA4mWBECgAbgLekhcAC9RSdba+m742k5OM60+KdtkREzbERED2UzavSLDCq4LPdWKEBARdeybHMLi4lj25juow9WqN6r2fvHsr8SJyergXALe1amtVz7iu1he+8nMp/i7p1jdObJly7DhMStREqLfK6qwvvswvr3zU2zuQd5Pykb0JxDdQ1BwVeg5Uqd4Vu0vzI8AJpfSJVdEw7I7J23F1Zl4Lbce6JdUyx3NNmZR7B+8Pk0oNLb+JX/7Wb74V/i4Jm0vSrEWtamdb+weF+TAcZ31sfpvtcqjliWO877T4lPPSivypjvyX+ZIn3h+k1csqlabXIGqEHU2+ywl64fTl7dG2SOx/EfkJ5tdLoDyb5ibqUwgyqLASp9ONqVkNOlRLAlWqOV35VBH4R2ifATPq77a9P86WjBNdE+6B6aTNOfdFelZV2TEuxV7ZXNrIRpY23KdNeBF+JM6CDJeXUmoRESKREQEREBERASG2jXDOykXQKVIsp133AYEXDBTqN6yYdgASSAALkncAN5M5vj+lpNRylNCmY5Sc4YjmbG2u/dxnWOvLnKZWdk9hsMlJFppfItyM3tEsbkn4DwUTJKynS08aCkd1RgfiDJTZu26Vd1pqro7Gyq3aBO+wZd3mAO+aTKcMMsMuVn2PT9pvIfM/lJKYsNSyIq8hr48fjMszyu63xx6cZCIicuiIiBH7c2b9ZpikWyqXQvzKqbkDvMxVdhUmGIXUDEIqNa3YVEyrl8N8lYga1HAolR6qizuEDm5scgIXTnY28hK39IyXw9NuVUD1R/0ltlV+kMf8sn+Mv9FSBzeXfo/0RoVqFOq71CXBJClQoIYiw7JPDnKROtdEqeXB0BzQt+JmYfOWjnHSPZgw2IempJWyspa18rDjbkQR5TV2YmatRXnVQerqJZ/pHo2q0X95Cv4Gv/nkD0bTNisOP+4p/Cc35QOwmR+09mLVSoBZXemaWe1yqMbkCb8SCnYzoTTd6uTsKUTq9SQHGYOGG8ggL+I2li2NgGoUxSLlwpOQsLEJpZTzsb+VuU34gIiICIiAiIgIiCbanQcTygVTp/tLJRWip7VU688i7/U2HrOcTf25tE4iu9XgTZByRdFHpr4kyV6PbCpVMPXxFYuqIDkKm2qrdju11IAHjKK3Lf8AR3gM1V6xGiLlX7z7/Rf6pUBfznX+juzfq+HSmfatmf77an00HlFEnERIEREBERAREQEr3TpL4Nz7rof5gv8Amlhld6ePbBuPedB/Nm/ywOXmdrwFHJSpp7iIvooE4vQS7oObKPUgTuBlopP0lJ2MO3JnHqFP+WVzoet8bh/vOfRHMtX0jr+wpHlVt6o/6Sq9DjbG0PF//wA3gdYiIkCIiAiIgIiICIiAlZ6dbU6qh1ant1rr4IPbPncL5mWeck6V7R6/Eu1+yh6tPuqSCfNrnziCIRCxCqLkkADmToBLr0tcYbC0MGh1IDPbiFNz+J7n+GaHQTZnWV+tYdijrruLn2fQXbyEiekG0frGIqVL9knKn3F0X13+co3+hezeuxKsR2KXbbvIPYHrr/CZ1OV3oTs7qcMrEdur2z90jsD8Ov8AEZYZAiIgIiICIiAiIgJCdMsPnwdW29Qr/gYE/wAt5NzBj6OenUT30dfxKR+cDjmzv76l/iJ/WJ2szh+EY50I35lI9RO4GWio/SN/8en/AIw/oqSo9Ez/AM5h/vn4owly+kKnfDKfdqqfVXH5yk9GWti8Of8AuKPXT84HX4iJAiIgIiICIiAiIgR+39odRh6lTiFsne7aL8TfynH6NJnZUUFmYhVHMk2Hxl86b10rdXSTEUrq5unbdi57Kj9mrWtdtDxM86JdF6tGsatZVGRSEAYNdm0zabrC+/XXulGztcLgMD1SHtv2Mw3s7Dtv5LcDl2ZSdg7NOIrpS+yTdzyRdW/TxIkr0/x2fE9X9mkoFv3nAdj6FR5Sf+j7Z2Sk1cjtVDZe5FNvi1/QQLcByiIkCIiAiIgIiICIiAnoM8kD0r2biMSiU6ToqEk1MxYX3ZRoDcb9PCBSMDsN2xKIhR1FXXJURyEV9SVDX3DlOrGQ3R7YCYVNO27e25Fif3VH2V7pMQIHpnhKlXDZKaF2zoSotewvz77Tn1DAvSqqzPSRqbqSDUUkFGBsQtzfTlOvym9O9hlwuIpoSy6OFFyy8GsNSRuPce6WC2YTFpVRXRsyMLqfhqDuN9LTNK70Gwrphu2CuZ2dVYEEKQo3HdcgnzlikCIiAiIgIiICQ3Sxq/1dloKzO7BTk9oIb5iPgL8M0mYgVfon0YGHAq1QDVI0G8Ux3c27+G4czaIiBFVsQxWo4IGZ+qpLYG7IzIzWI1JbNpuCoDzkqqgaAWA3AaATAmEQOXCKHN+1bXXU+F+POZ4CIiAiIgIiICIiB//Z",
      },
      {
        id: 43339775,
        englishWord: "completely",
        englishExample:
          "Milia will reappear if not removed <em>completely</em>.",
        russianWord: "полностью",
        russianExample:
          "Существует вероятность, что бородавка появится снова, если она была удалена не <em>полностью</em>.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "https://www.powerthesaurus.org/_images/terms/completely-synonyms-2.png",
      },
      {
        id: 43339773,
        englishWord: "complete",
        englishExample:
          "This is a <em>complete</em> ban on knowledge, its <em>complete</em> absence.",
        russianWord: "полный",
        russianExample:
          "Это <em>полный</em> запрет знаний, их <em>полное</em> отсутствие.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "data:image/png;base64,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",
      },
      {
        id: 43339752,
        englishWord: "peas",
        englishExample:
          "Like any product, green <em>peas</em> have their own characteristics.",
        russianWord: "горошка",
        russianExample:
          "Как и у любого продукта, у зеленого <em>горошка</em> есть свои особенности.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "https://theleafandclay.com/wp-content/uploads/2021/07/Peas-Image.png",
      },
      {
        id: 43339749,
        englishWord: "pea",
        englishExample:
          "Delicate skin is something of a princess on the <em>pea</em>.",
        russianWord: "горошине",
        russianExample:
          "Нежная кожа - это что-то вроде принцессы на <em>горошине</em>.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "https://t4.ftcdn.net/jpg/04/71/33/29/360_F_471332903_gRlgPsx8RAalmg02jz9ClXrlutltHTVA.jpg",
      },
      {
        id: 43339738,
        englishWord: "chickpea",
        englishExample:
          "One of the minerals that the <em>chickpea</em> contains in greater concentration, is precisely iron.",
        russianWord: "нут",
        russianExample:
          "Один из минералов, который содержит <em>нут</em> в большей концентрации, - это железо.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "https://www.haifa-group.com/sites/default/files/field/image/Chickpea%20Mobile%20banner.png",
      },
      {
        id: 43339732,
        englishWord: "lentil",
        englishExample:
          "In <em>lentil</em> beans have many beneficial for diabetics light carbohydrates.",
        russianWord: "чечевицы",
        russianExample:
          "В зернах <em>чечевицы</em> есть много полезных для диабетиков легких углеводов.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "https://pickyeaterblog.com/wp-content/uploads/2021/12/dry-red-lentils-for-how-to-cook-red-lentils-recipe-1.jpg",
      },
      {
        id: 43339724,
        englishWord: "lentils",
        englishExample:
          "Yellow <em>lentils</em> are ideal for soups and purees, and goes well with vegetables.",
        russianWord: "чечевицы",
        russianExample:
          "Желтая <em>чечевица</em> идеально подходит для приготовления супов и пюре и отлично сочетается с овощами.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "data:image/jpeg;base64,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",
      },
      {
        id: 43339703,
        englishWord: "evict",
        englishExample:
          "We cannot <em>evict</em> residents because they're strange.",
        russianWord: "выселять",
        russianExample:
          "Мы не можем <em>выселять</em> жильцов на основании твоих мурашек.",
        association: "",
        groupId: 1676189101146,
        done: true,
        picture:
          "https://www.property118.com/wp-content/uploads/2013/06/Help-needed-to-evict-a-problem-lodger.jpg",
      },
      {
        id: 43339677,
        englishWord: "cockroach",
        englishExample:
          "Another nasty insect that you can catch is the <em>cockroach</em>.",
        russianWord: "таракан",
        russianExample:
          "Еще одно противное насекомое, которое вы можете поймать, - это <em>таракан</em>.",
        association: "",
        groupId: 1676189101146,
        done: true,
        picture:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Snodgrass_common_household_roaches.png/1200px-Snodgrass_common_household_roaches.png",
      },
      {
        id: 43339660,
        englishWord: "substantial",
        englishExample:
          "This requires <em>substantial</em> changes in policy and practice.",
        russianWord: "существенным",
        russianExample:
          "Это неизбежно приведет к <em>существенным</em> изменениям в политике и практике.",
        association: "",
        groupId: 1676189101146,
        done: true,
        picture:
          "https://media.istockphoto.com/id/868433450/photo/close-up-of-full-english-breakfast-on-plate.jpg?s=1024x1024&w=is&k=20&c=R8xQus6AQmQ7KXqxMutSsaV8chCTN41mCjGHPSIHU1I=",
      },
      {
        id: 43465739,
        englishWord: "charcoal",
        englishExample:
          "Vodka is pure grain alcohol mixed with water and filtered through <em>charcoal</em>.",
        russianWord: "древесного угля",
        russianExample:
          "Водка - это чистый зерновой спирт, смешанный с водой и отфильтрованный при помощи <em>древесного угля</em>.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "data:image/jpeg;base64,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",
      },
      {
        id: 43465717,
        englishWord: "curtain",
        englishExample: "I just saw the <em>curtain</em> move.",
        russianWord: "занавеска",
        russianExample:
          "Беккет. Я только что видел, как шевелилась <em>занавеска</em>.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyuR3Nk7Q7Zmgl56lPCIqJsNiySJnYa_L8UA&usqp=CAU",
      },
      {
        id: 43465696,
        englishWord: "carpet",
        englishExample: "Furniture and <em>carpet</em> should be removed.",
        russianWord: "ковров",
        russianExample:
          "От мебели и <em>ковров</em> также нужно обязательно избавляться.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "data:image/jpeg;base64,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",
      },
      {
        id: 43465614,
        englishWord: "consist of",
        englishExample: "They <em>consist</em> primarily of very old stars.",
        russianWord: "состоят из",
        russianExample: "Они <em>состоят</em> в основном из старых звезд.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "https://qph.cf2.quoracdn.net/main-qimg-e9944dc11cc3c0c68df9993f6e0011b6-lq",
      },
      {
        id: 43465523,
        englishWord: "concerned",
        englishExample: "They aren't evil for being <em>concerned</em>.",
        russianWord: "беспокоиться",
        russianExample:
          "Он не есть зло, о котором нужно <em>беспокоиться</em>.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "https://uploads-ssl.webflow.com/5f29b3f3cea3ad5a1b369735/5f32ee7dcbf7b20b0c2cc230_Worry%2Bvs%2BConcern%2B-%2BIsaac%2BLien.png",
      },
      {
        id: 43465518,
        englishWord: "concerned",
        englishExample:
          "All departments <em>concerned</em> agree that there is room for improvement.",
        russianWord: "заинтересованные",
        russianExample:
          "Все <em>заинтересованные</em> департаменты согласились в том, что возможности для совершенствования пока не исчерпаны.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "https://cdn.businesswritingblog.com/wp-content/uploads/2021/07/Alright-2.jpg",
      },
      {
        id: 43465353,
        englishWord: "stall",
        englishExample:
          "One stays outside the <em>stall</em>, while the other one takes the pouch inside the <em>stall</em> with him.",
        russianWord: "кабинки",
        russianExample:
          "Один остаётся снаружи <em>кабинки</em>, пока другой берёт мешок с собой в <em>кабинку</em>.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "https://animalhow.com/wp-content/uploads/2020/05/horse-barn-stalls-stables.jpg",
      },
      {
        id: 43465339,
        englishWord: "stall",
        englishExample:
          "Another option is to open a small pavilion, a <em>stall</em> or booth where you can sell flowers.",
        russianWord: "киоск",
        russianExample:
          "Еще один вариант - открыть небольшой павильон, <em>киоск</em> или стенд, где вы сможете продавать цветы.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "https://i.pinimg.com/564x/fe/6c/5f/fe6c5f81d34f99560490b65324bc3801.jpg",
      },
      {
        id: 43465277,
        englishWord: "cane",
        englishExample:
          "Agave is not naturally sweet like sugar <em>cane</em>, honey or fruit.",
        russianWord: "тростник",
        russianExample:
          "Агава, естественно, не столь сладкая, как сахарный <em>тростник</em>, мед или фрукты.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "https://5.imimg.com/data5/MS/JG/HL/SELLER-27622251/freeze-dried-sugar-cane-1000x1000.png",
      },
      {
        id: 43465159,
        englishWord: "sheep",
        englishExample:
          "Particularly susceptible: cattle, horses, <em>sheep</em>.",
        russianWord: "овцы",
        russianExample:
          "Особенно чувствительны: крупный рогатый скот, лошади, <em>овцы</em>.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "https://th-thumbnailer.cdn-si-edu.com/a0d9clmmqWTNkqUuxQj1X-06lec=/1072x720/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b5/89/b589c580-f347-47fd-a50e-eeda34b57f82/sheep.jpg",
      },
      {
        id: 43465045,
        englishWord: "sesame",
        englishExample:
          "It is made of flour, oil, <em>sesame</em> and other raw materials.",
        russianWord: "кунжута",
        russianExample:
          "Изготавливается из муки, масла, <em>кунжута</em> и другого сырья.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "https://www.mygreekdish.com/wp-content/uploads/2020/11/Greek-Honey-Sesame-bars-Pasteli-recipe-scaled.jpg",
      },
      {
        id: 43464996,
        englishWord: "cereal",
        englishExample:
          "A study claims pizza is a healthier breakfast than <em>cereal</em>.",
        russianWord: "каши",
        russianExample:
          "Диетологи установили, что пицца - более здоровый завтрак, чем «полезные» <em>каши</em>.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "https://article.innovadatabase.com/articleimgs/article_images/637393930391956160Quick-breakfast-cereals-676066314_3840x5760.jpeg",
      },
      {
        id: 43464925,
        englishWord: "cabbage",
        englishExample:
          "On cooking, red <em>cabbage</em> will normally turn blue.",
        russianWord: "капуста",
        russianExample:
          "При готовке, красная <em>капуста</em>, как правило, приобретает синеватый оттенок.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "data:image/jpeg;base64,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",
      },
      {
        id: 43464779,
        englishWord: "to fatten",
        englishExample:
          "In the more than six decades since the end of the Second World War, when this question of what causes us <em>to fatten</em> - calories or carbohydrates - has been argued, it has often seemed like a religious issue rather than a scientific one.",
        russianWord: "полнеть",
        russianExample:
          "За более чем шестьдесят лет, прошедших после окончания войны, когда обсуждался вопрос о том, что заставляет нас <em>полнеть</em>, калории или углеводы, это обсуждение часто походило на религиозный диспут, а не на научный спор.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "https://cdn.shopify.com/s/files/1/2174/6657/articles/28_800x800.jpg?v=1502283159",
      },
      {
        id: 43464746,
        englishWord: "fatten",
        englishExample:
          "So I'm obviously going to need <em>fatten</em> him up.",
        russianWord: "откормить",
        russianExample: "Поэтому, очевидно, мне нужно <em>откормить</em> его.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "https://horseandrider.com/wp-content/uploads/migrations/horseandrider/Screen%20Shot%202021-07-29%20at%2011.56.23%20AM.png",
      },
      {
        id: 43464704,
        englishWord: "fattening",
        englishExample:
          "The farm consists of 4 identical buildings where <em>fattening</em> of 7000 animals takes place.",
        russianWord: "откорм",
        russianExample:
          "Ферма состоит из 4-х одинаковых зданий, где происходит <em>откорм</em> 7000 животных.",
        association: "",
        groupId: 1676189101146,
        done: false,
        picture:
          "https://www.catwalkqueen.tv/wp-content/uploads/2020/09/The-foods-that-are-the-most-fattening.jpg",
      },
      {
        id: 42267518,
        englishWord: "theft",
        englishExample: "He currently has a warrant for <em>theft</em>.",
        russianWord: "кража",
        russianExample:
          "В настоящее время у него условный срок за <em>кражу</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42267247,
        englishWord: "appear",
        englishExample:
          "In my experience, we don't make thoughts <em>appear</em>, they just <em>appear</em>.",
        russianWord: "появляться",
        russianExample:
          "На своем опыте я знаю, что мы не заставляем мысли <em>появляться</em>, - они просто <em>появляются</em>.",
        association: "",
        groupId: 1675754378680,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42267235,
        englishWord: "dissapear",
        englishExample: "The middle class will completely <em>dissapear</em>.",
        russianWord: "исчезнет",
        russianExample: "Средний класс <em>исчезнет</em> полностью.",
        association: "",
        groupId: 1675754378680,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42267173,
        englishWord: "shoplifter",
        englishExample:
          "He is honest and honorable and so not a <em>shoplifter</em>.",
        russianWord: "магазинный вор",
        russianExample:
          "Он честный и благородный, и уж никак не <em>магазинный вор</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42267132,
        englishWord: "community service",
        englishExample:
          "If she pleads, we'll recommend probation plus <em>community service</em>.",
        russianWord: "общественные работы",
        russianExample:
          "Если она признает свою вину, мы будем рекомендовать испытательный срок и <em>общественные работы</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42267071,
        englishWord: "crime",
        englishExample: "No nation is totally safe from <em>crime</em>.",
        russianWord: "преступлений",
        russianExample:
          "Ни одна страна в мире не является полностью безопасной или свободной от <em>преступлений</em>.",
        association: "",
        groupId: 1675754378680,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42267057,
        englishWord: "criminals",
        englishExample: "We used our dogs to apprehend <em>criminals</em>.",
        russianWord: "преступников",
        russianExample:
          "Для того, чтобы ловить <em>преступников</em> стали использовать собак.",
        association: "",
        groupId: 1675754378680,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42266974,
        englishWord: "sentence",
        englishExample: "It's the opening <em>sentence</em> in Hamlet.",
        russianWord: "приговор",
        russianExample:
          "Это первый <em>приговор</em>, связанный с протестами в Хемнице.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42266923,
        englishWord: "punish",
        englishExample: "I can <em>punish</em> myself but not you.",
        russianWord: "наказать",
        russianExample: "Я могу <em>наказать</em> себя, но не тебя».",
        association: "",
        groupId: 1675754378680,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42266904,
        englishWord: "punishment",
        englishExample:
          "The <em>punishment</em> seemed disproportionate to the infraction.",
        russianWord: "наказание",
        russianExample:
          "Но я думаю, что это <em>наказание</em> было непропорциональным в связи с нарушением.",
        association: "",
        groupId: 1675754378680,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42266872,
        englishWord: "thief",
        englishExample: "Since when the <em>thief</em> saves the child.",
        russianWord: "вор",
        russianExample: "С тех пор, когда <em>вор</em> спас ее ребенка.",
        association: "",
        groupId: 1675754378680,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42266834,
        englishWord: "judge",
        englishExample:
          "After the investigating <em>judge</em> receives the indictment the <em>judge</em> shall send the accused to court for a hearing.",
        russianWord: "судья",
        russianExample:
          "Получив обвинительное заключение, следственный <em>судья</em> направляет обвиняемого в суд для слушания дела.",
        association: "",
        groupId: 1675754378680,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42266704,
        englishWord: "stealing",
        englishExample:
          "Instead of singing and dancing I have <em>stealing</em> and disappearing.",
        russianWord: "кражу",
        russianExample:
          "Вместо того, чтобы петь и танцевать, я получаю <em>кражу</em> и исчезновение.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41684203,
        englishWord: "loan",
        englishExample:
          "Oftentimes borrowers have more than one <em>loan</em>.",
        russianWord: "кредит",
        russianExample:
          "Очень часто бывает так, что у заемщика есть более, чем один <em>кредит</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41684193,
        englishWord: "fine",
        englishExample: "If you lost one, you'd have to pay a <em>fine</em>.",
        russianWord: "штраф",
        russianExample:
          'Если потеряешь, придется платить <em class="both">штраф</em>.',
        association: "",
        groupId: 1675754378680,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41684018,
        englishWord: "rally",
        englishExample:
          "We can go to a <em>rally</em> without endorsing his candidature'.",
        russianWord: "митинг",
        russianExample:
          "Мы можем пойти на <em>митинг</em>, не поддерживая при этом его кандидатуру».",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41618467,
        englishWord: "lend",
        englishExample: "My friends will <em>lend</em> me the money.",
        russianWord: "одолжить",
        russianExample:
          "У меня есть друзья, Которые мне смогут <em>одолжить</em> денег.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41618429,
        englishWord: "lent",
        englishExample: "Tom never read the book that I <em>lent</em> him.",
        russianWord: "одолжил",
        russianExample:
          "Том так и не прочитал книгу, которую я ему <em>одолжил</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41617911,
        englishWord: "coastline",
        englishExample:
          "The spider was discovered on the California <em>coastline</em> in 2007.",
        russianWord: "побережье",
        russianExample:
          "Новый вид пауков был обнаружен на <em>побережье</em> штата Калифорния в 2007 году.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41617842,
        englishWord: "spectacular",
        englishExample:
          "Himeji Castle is a <em>spectacular</em> Japanese castle located near Kyoto.",
        russianWord: "впечатляющий",
        russianExample:
          "Замок Химэдзи - это <em>впечатляющий</em> японский замок, расположенный недалеко от Киото.",
        association: "",
        groupId: 1675754378680,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41601738,
        englishWord: "essential",
        englishExample:
          "Controlling the vocabulary within these systems is also <em>essential</em>.",
        russianWord: "необходимо",
        russianExample:
          "Причем, рассмотрение содержания искусства в рамках этой системы так-же <em>необходимо</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41601728,
        englishWord: "patient",
        englishExample: "The driver was nice and <em>patient</em> with us.",
        russianWord: "терпеливый",
        russianExample:
          'Наш водитель был замечательным и <em class="both">терпеливый</em>.',
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41601692,
        englishWord: "astonishing",
        englishExample:
          "The <em>astonishing</em> case was reported in Stendek magazine.",
        russianWord: "удивительный",
        russianExample:
          "Этот <em>удивительный</em> случай был опубликован в журнале «Stendek».",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41601681,
        englishWord: "elusive",
        englishExample: "He may not be as <em>elusive</em> as we thought.",
        russianWord: "неуловимый",
        russianExample:
          "Может быть, он не такой уж <em>неуловимый</em>, как нам кажется.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41601673,
        englishWord: "uncertain",
        englishExample: "The future of Google Glass looks <em>uncertain</em>.",
        russianWord: "неопределенным",
        russianExample:
          "По мнению некоторых экспертов, будущее умных очков Google выглядит <em>неопределенным</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41600858,
        englishWord: "sled",
        englishExample:
          "In 1990 she travelled 4000 km around Baffin Island by dog <em>sled</em>.",
        russianWord: "упряжках",
        russianExample:
          "В 1990 году совершила путешествие на собачьих <em>упряжках</em>, проехав 4000 км вокруг острова Баффин.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41600513,
        englishWord: "intelligent",
        englishExample: "Robots are as <em>intelligent</em> as people.",
        russianWord: "умными",
        russianExample:
          "Роботы уже стали во многом такими же <em>умными</em>, как и человек.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41600485,
        englishWord: "shark",
        englishExample: "I've never seen a <em>shark</em>.",
        russianWord: "акулы",
        russianExample: "Я так и не увидел ни одной <em>акулы</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41600455,
        englishWord: "cheetah",
        englishExample: "A <em>cheetah</em> runs as fast as any animal.",
        russianWord: "Гепард",
        russianExample:
          "<em>Гепард</em> бегает так же быстро, как и любое другое животное.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41600425,
        englishWord: "ostrich",
        englishExample:
          "African <em>ostrich</em> can kill their target within seconds only.",
        russianWord: "страус",
        russianExample:
          "Африканский <em>страус</em> может убить свою цель только за секунды.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41600386,
        englishWord: "whale",
        englishExample: "Imagine that <em>whale</em> listening from 500 miles.",
        russianWord: "кит",
        russianExample:
          "Представьте себе, что слышит <em>кит</em> на расстоянии 500 миль.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41600247,
        englishWord: "equipment",
        englishExample:
          "Emergency <em>equipment</em> can be airborne within 24 hours.",
        russianWord: "Оборудование",
        russianExample:
          "<em>Оборудование</em> для оказания чрезвычайной помощи может в течение 24 часов перебрасываться по воздуху в место назначения.",
        association: "",
        groupId: 1675754378680,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41600185,
        englishWord: "scared",
        englishExample: "He was <em>scared</em> and lonely like me.",
        russianWord: "напуган",
        russianExample: "Он был <em>напуган</em> и одинок, как и я».",
        association: "",
        groupId: 1675754378680,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41600095,
        englishWord: "bump into",
        englishExample:
          "Foreigners may <em>bump into</em> one of those parties if they are lucky.",
        russianWord: "столкнуться с",
        russianExample:
          "Иностранцы могут <em>столкнуться с</em> одной из этих партий, если им повезет.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41599969,
        englishWord: "inmates",
        englishExample:
          "There is only one guard per every 50 <em>inmates</em>.",
        russianWord: "заключенных",
        russianExample:
          "В тюрьме на каждых 150 <em>заключенных</em> приходится всего лишь один охранник.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41599754,
        englishWord: "guards",
        englishExample:
          "They had 45 <em>guards</em> that they changed every 6 months.",
        russianWord: "охранников",
        russianExample:
          "У них было 45 <em>охранников</em>, которых они меняли каждые 6 месяцев.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41599535,
        englishWord: "seals",
        englishExample:
          "Seabirds, penguins and <em>seals</em> feed in the surrounding waters.",
        russianWord: "тюлени",
        russianExample:
          "Морские птицы, пингвины и <em>тюлени</em> питаются в окружающих водах моря Скоша.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41599505,
        englishWord: "gerbils",
        englishExample:
          "In winter, when <em>gerbils</em> do not come to the surface, starving cats can wander to human habitation and crawl into the hen house.",
        russianWord: "песчанки",
        russianExample:
          "Зимой, когда <em>песчанки</em> не выходят на поверхность, изголодавшиеся коты могут забрести к человеческому жилью и залезть в курятник.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41599430,
        englishWord: "abandoned",
        englishExample:
          "This explains why ghosts often appear in <em>abandoned</em> buildings.",
        russianWord: "заброшенных",
        russianExample:
          "Это объясняет, почему призраки чаще всего «появляются» в <em>заброшенных</em> зданиях.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41599397,
        englishWord: "earthquake",
        englishExample:
          "Twitter literally moved and reported faster than an <em>earthquake</em>.",
        russianWord: "землетрясение",
        russianExample:
          "Рекламный ролик, который утверждает, что Twitter даже быстрее, чем <em>землетрясение</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41599364,
        englishWord: "buddy",
        englishExample: "Look, my <em>buddy</em> just sent me this text.",
        russianWord: "приятель",
        russianExample:
          "«Посмотрите, мой <em>приятель</em> только что прислал мне этот текст.",
        association: "",
        groupId: 1675754378680,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41598892,
        englishWord: "bow",
        englishExample: "Just bring me my <em>bow</em> and arrows.",
        russianWord: "лук",
        russianExample: "Он сказал: «Принеси мне мой <em>лук</em> и стрелы».",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41597375,
        englishWord: "sink into the ground",
        englishExample:
          "I then felt as though my manhood had been injured, and wished to <em>sink into the ground</em> for shame.",
        russianWord: "провалиться сквозь землю",
        russianExample:
          "Тогда я почувствовал, что мое мужское достоинство унижено, и готов был <em>провалиться сквозь землю</em> от стыда.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41597350,
        englishWord: "froze with fear",
        englishExample: "Her heart <em>froze with fear</em>.",
        russianWord: "холодеет от страха",
        russianExample: "Сердце <em>холодеет от страха</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41597278,
        englishWord: "stare",
        englishExample:
          "Two ladies sitting near us started to <em>stare</em> and whisper.",
        russianWord: "смотреть",
        russianExample:
          "Две дамы, сидящие рядом с нами начали <em>смотреть</em> на нас и шептаться.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41596893,
        englishWord: "whisper",
        englishExample:
          "Although it is vital to rest the voice, people should not <em>whisper</em>.",
        russianWord: "шептать",
        russianExample:
          "Хотя очень важно дать голосу отдохнуть, люди не должны <em>шептать</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41596882,
        englishWord: "whispered",
        englishExample: '"And in the garden," he <em>whispered</em>.',
        russianWord: "шептал",
        russianExample: "«И в саду», - <em>шептал</em> он.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41596836,
        englishWord: "approach",
        englishExample:
          "You'll immediately feel the <em>approach</em> of the day for all loving people.",
        russianWord: "приближение",
        russianExample:
          'Вы сразу почувствуете <em class="both">приближение</em> дня всех влюбленных.',
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41596831,
        englishWord: "approach",
        englishExample:
          "This <em>approach</em> did not ensure cost-effective purchasing.",
        russianWord: "подход",
        russianExample:
          "Этот <em>подход</em> не позволял обеспечить осуществление закупок на эффективной с точки зрения затрат основе.",
        association: "",
        groupId: 1675754378680,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41594686,
        englishWord: "shut",
        englishExample:
          "Lufthansa does not plan to <em>shut</em> its office in Caracas.",
        russianWord: "закрыть",
        russianExample:
          "Тем не менее, авиакомпания не планирует <em>закрыть</em> свой офис в Каракасе.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41594670,
        englishWord: "clearing",
        englishExample:
          "It's a <em>clearing</em> at the top of Breakers Woods.",
        russianWord: "поляна",
        russianExample:
          'Это <em class="both">поляна</em> на вершине Брикерс Вуд.',
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41594665,
        englishWord: "clearing",
        englishExample:
          "We also found that <em>clearing</em> senescent cells improves insulin sensitivity.",
        russianWord: "очистка",
        russianExample:
          "«Мы также обнаружили, что <em>очистка</em> стареющих клеток улучшает чувствительность к инсулину.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41594658,
        englishWord: "clearing",
        englishExample:
          "Whatever was inside this <em>clearing</em> protected the ground.",
        russianWord: "открытом месте",
        russianExample:
          "То, что было на этом <em>открытом месте</em>, защитило землю.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41594389,
        englishWord: "howling",
        englishExample: "Last night, I heard dogs <em>howling</em>.",
        russianWord: "вой",
        russianExample: "Прошлой ночью я слышал собачий <em>вой</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41594353,
        englishWord: "hot and humid",
        englishExample:
          "It was quite <em>hot and humid</em> and the air conditioner wasn't working.",
        russianWord: "жарко и влажно",
        russianExample: "Было <em>жарко и влажно</em>, кондиционер не работал.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41594246,
        englishWord: "entire",
        englishExample:
          "I can give some work for the <em>entire</em> nations and <em>entire</em> population.",
        russianWord: "целого",
        russianExample:
          "Я могу дать работу для <em>целого</em> народа, для <em>целой</em> нации.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41594239,
        englishWord: "tribe",
        englishExample:
          "The <em>tribe</em> that occupied the area killed and ate his entire team.",
        russianWord: "Племя",
        russianExample:
          "<em>Племя</em>, которое обитало в этом районе, убило и съело всю его команду.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41594224,
        englishWord: "scenery",
        englishExample:
          "Beautiful natural <em>scenery</em> you can have on your screen.",
        russianWord: "пейзаж",
        russianExample:
          "Красивый природный <em>пейзаж</em>, который Вы можете иметь на вашем экране.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41594198,
        englishWord: "rural area",
        englishExample:
          "So it was a very <em>rural area</em>, and very beautiful.",
        russianWord: "сельская местность",
        russianExample: "Это была <em>сельская местность</em>, очень красивая.",
        association: "",
        groupId: 1675754378680,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41594168,
        englishWord: "hut",
        englishExample:
          "Each wife has her own <em>hut</em> where she lives with their children.",
        russianWord: "хижина",
        russianExample:
          "У каждой жены есть своя собственная <em>хижина</em>, где она и ее дети спят.",
        association: "",
        groupId: 1675754378680,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41145679,
        englishWord: "home town",
        englishExample: "I barely recognize my <em>home town</em> now.",
        russianWord: "родной город",
        russianExample:
          "И вот теперь с трудом узнал свой <em>родной город</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41145671,
        englishWord: "arrive",
        englishExample:
          "That means they should <em>arrive</em> on schedule - September 21.",
        russianWord: "прибыть",
        russianExample:
          "Это означает, что они должны <em>прибыть</em> по расписанию - 21 сентября.",
        association: "",
        groupId: 1675754378680,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41145662,
        englishWord: "attend",
        englishExample:
          "When you <em>attend</em> classes more often, the cost is lower.",
        russianWord: "посещать",
        russianExample:
          "Если вы будете <em>посещать</em> уроки в дальнейшем, то стоимость их будет ниже.",
        association: "",
        groupId: 1675754378680,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41145654,
        englishWord: "eventually",
        englishExample: "Either way, <em>eventually</em>, you win.",
        russianWord: "В итоге",
        russianExample: "<em>В итоге</em>, так или иначе, вы в выигрыше.",
        association: "",
        groupId: 1675754378680,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41145625,
        englishWord: "proposal",
        englishExample:
          "Murray acknowledged the <em>proposal</em> could become controversial.",
        russianWord: "предложение",
        russianExample:
          "Впрочем, Трамп здесь же добавил, что это <em>предложение</em> может быть спорным.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41145572,
        englishWord: "clues",
        englishExample:
          "Visiting the website listed on the billboard ad revealed several <em>clues</em>.",
        russianWord: "подсказок",
        russianExample:
          "Посещение веб-сайта, в котором был написан на щите, показало несколько <em>подсказок</em>.",
        association: "",
        groupId: 1675754378680,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41145564,
        englishWord: "probably",
        englishExample: "DHS <em>probably</em> thinks I'm dead.",
        russianWord: "вероятно",
        russianExample:
          "В министерстве внутренней безопасности, <em>вероятно</em>, думают, что я мертв.",
        association: "",
        groupId: 1675754378680,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41145551,
        englishWord: "dust",
        englishExample:
          "Intergalactic <em>dust</em> is cosmic <em>dust</em> in between galaxies in intergalactic space.",
        russianWord: "пыль",
        russianExample:
          "Межгалактическая <em>пыль</em> (англ. Intergalactic dust) - космическая <em>пыль</em> в межгалактическом пространстве.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41060787,
        englishWord: "revolutionize",
        englishExample:
          "This could <em>revolutionize</em> a number of industries.",
        russianWord: "революционизировать",
        russianExample:
          "Это то, что может <em>революционизировать</em> очень многие отрасли.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41060708,
        englishWord: "disgusted",
        englishExample: "When I saw it I was so <em>disgusted</em>.",
        russianWord: "отвратительно",
        russianExample:
          "«Когда я увидела это, мне было так <em>отвратительно</em>.",
        association: "",
        groupId: 1675754378680,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41060605,
        englishWord: "basement",
        englishExample: "That can ensure that the <em>basement</em> stays dry.",
        russianWord: "подвал",
        russianExample:
          "Итак, все это можно сделать для того, чтобы <em>подвал</em> оставался сухим.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41060572,
        englishWord: "credence",
        englishExample:
          "Such tales had never received much <em>credence</em>, but in the 1890s they were assiduously collected and analysed.",
        russianWord: "доверием",
        russianExample:
          "Подобные истории никогда не пользовались большим <em>доверием</em>, но в 1890-х годах были прилежно собраны вместе и проанализированы.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41060518,
        englishWord: "keep doing",
        englishExample: "You can't <em>keep doing</em> that indefinitely.",
        russianWord: "продолжать делать",
        russianExample:
          "И Вы не сможете <em>продолжать делать</em> это бесконечно».",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41060264,
        englishWord: "eventually",
        englishExample: "George <em>eventually</em> returned in January 1737.",
        russianWord: "в конце концов",
        russianExample:
          "Георг, <em>в конце концов</em>, вернулся в январе 1737 года.",
        association: "",
        groupId: 1675754378680,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41060075,
        englishWord: "self-expression",
        englishExample:
          "Art is the unapologetic celebration of culture through <em>self-expression</em>.",
        russianWord: "самовыражение",
        russianExample:
          "Искусство это безусловное торжество культуры через <em>самовыражение</em>, не требующее оправданий.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41060017,
        englishWord: "corporate executive",
        englishExample:
          "There's no denying he's refreshingly down-to-earth for a <em>corporate executive</em>.",
        russianWord: "директор корпорации",
        russianExample:
          "Несомненно, перед нами необычайно простой и искренний <em>директор корпорации</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41059943,
        englishWord: "kindergartner",
        englishExample:
          "When he wears a baseball hat, it makes him look like a <em>kindergartner</em>.",
        russianWord: "детсадовца",
        russianExample:
          "Когда он одевает бейсбольную кепку, то похож на <em>детсадовца</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41030837,
        englishWord: "substantial",
        englishExample:
          "Most villages in southern Lebanon sustained <em>substantial</em> damage, while many were completely destroyed.",
        russianWord: "значительный",
        russianExample:
          "Почти всем деревням, расположенным в Южном Ливане, был причинен <em>значительный</em> ущерб, а многие были полностью разрушены.",
        association: "",
        groupId: 1675754378680,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40960624,
        englishWord: "cured",
        englishExample: "If treated medically, IBS is rarely <em>cured</em>.",
        russianWord: "вылечить",
        russianExample:
          "Если рассматривать медицинские репорты, то IBS редко можно <em>вылечить</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40960581,
        englishWord: "find out",
        englishExample: "You may <em>find out</em> how they work.",
        russianWord: "узнать",
        russianExample: "А вот вы можете <em>узнать</em>, как они работают.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40960550,
        englishWord: "rob",
        englishExample: "He'd never <em>rob</em> a bank.",
        russianWord: "ограбить",
        russianExample: "Нет, ну не мог он <em>ограбить</em> банк.",
        association: "",
        groupId: 1675754378680,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40960489,
        englishWord: "recognised",
        englishExample:
          "Risto Joost is a <em>recognised</em> conductor on opera and concert stages.",
        russianWord: "признанный",
        russianExample:
          "Ристо Йоост - <em>признанный</em> дирижёр как на оперных, так и концертных сценах.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40960472,
        englishWord: "bullet",
        englishExample:
          "Unless you can move faster than a speeding <em>bullet</em>.",
        russianWord: "пуля",
        russianExample:
          "Если только ты не можешь двигаться быстрее, чем летящая <em>пуля</em>.",
        association: "",
        groupId: 1675754378680,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40960451,
        englishWord: "fame",
        englishExample: "I never wanted money, or <em>fame</em>.",
        russianWord: "известность",
        russianExample:
          "И мне никогда не нужны были деньги или <em>известность</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40960356,
        englishWord: "impostor",
        englishExample:
          "Whatever his real identity, the <em>impostor</em> reportedly spoke Latin fluently.",
        russianWord: "самозванец",
        russianExample:
          "Вне зависимости от его реальной личности, <em>самозванец</em>, как сообщается, свободно владел латинским языком.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40960129,
        englishWord: "improve",
        englishExample: "As you <em>improve</em>, we all <em>improve</em>.",
        russianWord: "улучшать",
        russianExample:
          "По мере того, как вы будете <em>улучшать</em> себя, вы будете <em>улучшать</em> всех нас.",
        association: "",
        groupId: 1675754378680,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40959932,
        englishWord: "strength training",
        englishExample:
          "As you'll see, <em>strength training</em> requires little time and minimal equipment.",
        russianWord: "силовых тренировок",
        russianExample:
          "Вы увидите, что для проведения <em>силовых тренировок</em> требуется минимальное снаряжение и не так уж много времени.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40959922,
        englishWord: "Strength",
        englishExample:
          "<em>Strength</em> based on these principles is no threat to world peace.",
        russianWord: "Сила",
        russianExample:
          "<em>Сила</em>, основанная на этих принципах, не является угрозой миру во всем мире.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40959919,
        englishWord: "strengthen",
        englishExample:
          "Even a 30-minute walk in the woods can <em>strengthen</em> immunity.",
        russianWord: "укрепить",
        russianExample:
          "А ведь всего полчаса прогулок на свежем воздухе способны в значительной степени <em>укрепить</em> иммунитет.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40959869,
        englishWord: "fall asleep",
        englishExample: "If unable to <em>fall asleep</em> within 20 minutes.",
        russianWord: "заснуть",
        russianExample:
          "Если вы не можете <em>заснуть</em>, встаньте через 20 минут.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40959836,
        englishWord: "they lower",
        englishExample:
          "Foods with high fiber content and antioxidant qualities are recommended for those with diabetes because <em>they lower</em> cholesterol.",
        russianWord: "они снижают",
        russianExample:
          "Пищевые продукты с высоким содержанием клетчатки и антиоксидантными свойствами идеально подходят для пациентов с сахарным диабетом, ведь <em>они снижают</em> уровень холестерина.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40959615,
        englishWord: "toward",
        englishExample: "Some movement <em>toward</em> solutions has begun.",
        russianWord: "в направлении",
        russianExample:
          "Я думаю, что некоторое движение <em>в направлении</em> решения проблем уже началось.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40959586,
        englishWord: "disease",
        englishExample: "You might realize you have this <em>disease</em>.",
        russianWord: "заболевание",
        russianExample:
          "Вы сможете точно убедиться в том, что у вас есть данное <em>заболевание</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40959551,
        englishWord: "frees",
        englishExample: "Radio nurse <em>frees</em> you from many problems.",
        russianWord: "освободит",
        russianExample: "Радио няня <em>освободит</em> вас от многих проблем.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40959531,
        englishWord: "cut back",
        englishExample:
          "Many traders actually find that once they begin to <em>cut back</em> their screen time their success rate climbs.",
        russianWord: "урезать",
        russianExample:
          "И многие трейдеры с удивлением обнаружили, что как только они начинают <em>урезать</em> «экранное время», у них увеличивается процент успеха.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40959413,
        englishWord: "obesity",
        englishExample:
          "Among respondents from middle-income <em>obesity</em> diagnosed 42,9%.",
        russianWord: "ожирение",
        russianExample:
          "Что касается респонденток со средним уровнем дохода, то <em>ожирение</em> диагностировали у 42,9% из них.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40959287,
        englishWord: "score",
        englishExample:
          "Its <em>score</em> in Culture and Environment was 97.2.",
        russianWord: "оценка",
        russianExample:
          "Его <em>оценка</em> в области культуры и окружающей среды составила 97,2.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40959286,
        englishWord: "score",
        englishExample:
          "So the best way to improve this <em>score</em> by improving your overall <em>score</em>.",
        russianWord: "счет",
        russianExample:
          "Так что лучший способ улучшить этот <em>счет</em>, улучшив ваш общий <em>счет</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40959268,
        englishWord: "jump-start",
        englishExample:
          "Maybe you need a few sessions to <em>jump-start</em> communication.",
        russianWord: "начать",
        russianExample:
          "Может быть, вам нужно несколько сеансов, чтобы <em>начать</em> общение.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40959267,
        englishWord: "jump-start",
        englishExample:
          "Photo op, publicity stunt, to <em>jump-start</em> his mayoral campaign.",
        russianWord: "запустить",
        russianExample:
          "Позирование перед прессой, пиар-ход, чтобы <em>запустить</em> его кампанию по продвижению в мэры.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40959250,
        englishWord: "bunch",
        englishExample:
          "There are <em>bunch</em> of Russian software companies that can replace American products.",
        russianWord: "куча",
        russianExample:
          "Есть <em>куча</em> российских программных компаний, которые могут заменить американские продукты.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40959243,
        englishWord: "bunch",
        englishExample: "It is our <em>bunch</em> of bananas.",
        russianWord: "связка",
        russianExample: 'Это и есть наша "<em>связка</em> бананов".',
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40958960,
        englishWord: "admit",
        englishExample: "Just be honest and bold and <em>admit</em> it.",
        russianWord: "признать",
        russianExample:
          "Так давайте же будем честны и смелы, чтобы <em>признать</em> это.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40957369,
        englishWord: "actually",
        englishExample:
          "Russian people are <em>actually</em> very open-minded.",
        russianWord: "На самом деле",
        russianExample:
          "<em>На самом деле</em>, люди в России очень открытые и душевные.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40957274,
        englishWord: "set about",
        englishExample:
          "Here he <em>set about</em> his new task with enthusiasm.",
        russianWord: "приступил к",
        russianExample:
          "И вот он <em>приступил к</em> своим новым обязанностям с особым энтузиазмом.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40956947,
        englishWord: "adore",
        englishExample:
          "I <em>adore</em> being outdoors, being close to water.",
        russianWord: "обожаю",
        russianExample:
          "Я <em>обожаю</em> быть на открытом воздухе, будучи рядом с водой.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40955987,
        englishWord: "hit",
        englishExample: "Don't <em>hit</em> him; <em>hit</em> me instead.",
        russianWord: "бей",
        russianExample: "Не <em>бей</em> его, <em>ударь</em> меня вместо него.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40955968,
        englishWord: "calm down",
        englishExample: "You and your child both need to <em>calm down</em>.",
        russianWord: "успокоиться",
        russianExample:
          "И вам, и вашему ребенку в этой ситуации необходимо <em>успокоиться</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40955967,
        englishWord: "thought",
        englishExample: "Especially if the <em>thought</em> terrifies you.",
        russianWord: "мысль",
        russianExample:
          "И даже в том случае, если эта <em>мысль</em> вас пугает.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40906340,
        englishWord: "suggests",
        englishExample:
          "And probably with fewer engines than the original design <em>suggests</em>.",
        russianWord: "предполагает",
        russianExample:
          "И, вероятно, с меньшим количеством двигателей, чем <em>предполагает</em> оригинальный дизайн.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40906338,
        englishWord: "majestic",
        englishExample:
          "I want every person to feel this <em>majestic</em> moment.",
        russianWord: "величественный",
        russianExample:
          "Я хочу, чтобы каждый житель смог ощутить этот <em>величественный</em> момент.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40906301,
        englishWord: "coast",
        englishExample:
          "The Atlantic <em>coast</em> of North America rapidly cooled, but the Pacific <em>coast</em> remained warmer than at present.",
        russianWord: "побережье",
        russianExample:
          "Атлантическое <em>побережье</em> Северной Америки быстро охлаждалось, но тихоокеанское <em>побережье</em> оставалось более теплым, чем в настоящее время.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40906231,
        englishWord: "nearby",
        englishExample:
          "Often, not only forests but also <em>nearby</em> cities are threatened.",
        russianWord: "близлежащие",
        russianExample:
          "Зачастую, угрозе подвергаются не только лесные массивы, но и <em>близлежащие</em> города.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40905849,
        englishWord: "curtain",
        englishExample:
          "Wallpaper from England, <em>curtain</em> hand-painted in New York.",
        russianWord: "занавес",
        russianExample:
          "Обои из Англии, <em>занавес</em>, расписанный вручную, из Нью-Йорка.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40905845,
        englishWord: "aquatic",
        englishExample:
          "Our goal at Atlantis is to educate guests on different <em>aquatic</em> animals.",
        russianWord: "водных",
        russianExample:
          "«Наша цель в Atlantis состоит в том, чтобы рассказать гостям о различных <em>водных</em> животных.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40905840,
        englishWord: "cave",
        englishExample:
          "The <em>cave</em> is developed as a show <em>cave</em> at the moment.",
        russianWord: "Пещера",
        russianExample:
          "<em>Пещера</em> в данный момент разрабатывается как <em>пещера</em> для показа.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40905821,
        englishWord: "Glacier",
        englishExample:
          "Columbia <em>Glacier</em> appears in the background, August 1974.",
        russianWord: "ледник",
        russianExample:
          "На заднем плане виднеется <em>ледник</em> «Колумбия», август 1974 года.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40905818,
        englishWord: "volcanic Glacier",
        englishExample:
          "Here you can see all the variety of landscapes - from coastal tundra to the <em>volcanic glaciers</em>.",
        russianWord: "вулканических ледников",
        russianExample:
          "Здесь можно увидеть все разнообразие ландшафтов - от приморской тундры до <em>вулканических ледников</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40905710,
        englishWord: "gem",
        englishExample:
          "Ryazan Kremlin is a real architectural <em>gem</em>, to say the least.",
        russianWord: "жемчужина",
        russianExample:
          "А Рязанский кремль - настоящая архитектурная <em>жемчужина</em>, если не сказать больше.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40905689,
        englishWord: "vivid",
        englishExample:
          "Her works are always a <em>vivid</em> experiment guided with only one rule.",
        russianWord: "яркий",
        russianExample:
          "Ее работы - всегда <em>яркий</em> эксперимент, в котором она старается придерживаться только одного правила.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40905685,
        englishWord: "psychedelically",
        englishExample:
          "He saw Joplin's <em>psychedelically</em> painted Porsche 356C Cabriolet in the parking lot.",
        russianWord: "психоделически",
        russianExample:
          "Он видел <em>психоделически</em> покрашенный Porsche 356C Cabriolet Джоплина в автостоянке.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40905640,
        englishWord: "Surrounded",
        englishExample: "That we have always been <em>Surrounded</em>.",
        russianWord: "окружены",
        russianExample: "Я помню, что мы были всегда <em>окружены</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40821417,
        englishWord: "recover",
        englishExample:
          "They helped me <em>recover</em> and I felt even closer to them.",
        russianWord: "восстановиться",
        russianExample:
          "Они помогли мне <em>восстановиться</em> и я стал чувствовать, что я ближе к ним.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40821370,
        englishWord: "damage",
        englishExample:
          "Wakefulness essentially is low-level brain <em>damage</em>.",
        russianWord: "повреждение",
        russianExample:
          "По сути, бодрствование - это <em>повреждение</em> мозга на нижних уровнях.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40821200,
        englishWord: "beforehand",
        englishExample: "Clinton must have known this <em>beforehand</em>.",
        russianWord: "заранее",
        russianExample: "Клинтон, вероятно, <em>заранее</em> знала об этом.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40820870,
        englishWord: "measure",
        englishExample:
          "Beauty becomes a <em>measure</em>, and the <em>measure</em> of all things is man.",
        russianWord: "мера",
        russianExample:
          "Красота здесь выступает как <em>мера</em>, а <em>мерой</em> всего является человек.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40820737,
        englishWord: "sufferer",
        englishExample: "The <em>sufferer</em> can often feel tired and weak.",
        russianWord: "Больной",
        russianExample: "<em>Больной</em> часто ощущает усталость и слабость.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40820703,
        englishWord: "guess",
        englishExample: "I bet you can <em>guess</em> where it'll land.",
        russianWord: "угадать",
        russianExample:
          "Теперь дело за тобой, чтобы <em>угадать</em>, где он приземлится.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40820531,
        englishWord: "as well",
        englishExample: "Analysts see other reasons <em>as well</em>.",
        russianWord: "также",
        russianExample:
          "Однако, некоторые аналитики <em>также</em> видят другую причину.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40820464,
        englishWord: "sweat",
        englishExample: "We lose electrolytes when we <em>sweat</em>.",
        russianWord: "потеем",
        russianExample:
          "А вот главные потери электролитов происходят в тот момент, когда мы <em>потеем</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40820456,
        englishWord: "sweat",
        englishExample: "Unfortunately, it's my <em>sweat</em>.",
        russianWord: "пот",
        russianExample: "К несчастью для тебя, это мой <em>пот</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40820445,
        englishWord: "sweating",
        englishExample:
          "Small lifestyle changes may help if <em>sweating</em> is temporary.",
        russianWord: "потливость",
        russianExample:
          "Небольшие изменения в образе жизни могут помочь, если <em>потливость</em> является временной.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40820333,
        englishWord: "aches",
        englishExample: "Yes, Derek, I have a tummy and it <em>aches</em>.",
        russianWord: "болит",
        russianExample: "Да, Дерек, у меня есть животик, и он <em>болит</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40820260,
        englishWord: "aches",
        englishExample: "He used to suffer from stomach <em>aches</em>.",
        russianWord: "болей",
        russianExample: "Она часто страдала от <em>болей</em> в желудке.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40820176,
        englishWord: "get out of breath",
        englishExample: "And you see, if I speak I <em>get out of breath</em>.",
        russianWord: "задыхаюсь",
        russianExample: "И, ты видишь, я говорю и <em>задыхаюсь</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40819970,
        englishWord: "rash",
        englishExample:
          "They can include things like fever and mild <em>rash</em>.",
        russianWord: "сыпь",
        russianExample:
          "Они могут включать такие вещи, как жар и легкая <em>сыпь</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40819867,
        englishWord: "awful",
        englishExample:
          "He's an <em>awful</em>, <em>awful</em>, <em>awful</em> man.",
        russianWord: "ужасный",
        russianExample:
          "Он - <em>ужасный</em>, <em>ужасный</em>, <em>ужасный</em> человек.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40819839,
        englishWord: "cough",
        englishExample:
          "Chronic <em>cough</em>, which increases despite treatment.",
        russianWord: "кашель",
        russianExample:
          "Хронический <em>кашель</em>, который усиливается, несмотря на лечение.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40819825,
        englishWord: "sneeze",
        englishExample: "Also, avoid people who <em>sneeze</em> and cough.",
        russianWord: "чихают",
        russianExample:
          "Кроме того, необходимо избегать людей, которые кашляют и <em>чихают</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40819712,
        englishWord: "least",
        englishExample: "He does wrong when you <em>least</em> expect it.",
        russianWord: "меньше всего",
        russianExample:
          "Он наносит вред тогда, когда ожидаешь этого <em>меньше всего</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40814027,
        englishWord: "upset stomach",
        englishExample:
          "Not good when you are having an <em>upset stomach</em>.",
        russianWord: "расстройство желудка",
        russianExample:
          "Невозможно быть счастливым, если у тебя <em>расстройство желудка</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40814010,
        englishWord: "upset",
        englishExample: "But you could see he was very <em>upset</em>.",
        russianWord: "расстроен",
        russianExample:
          "По виду его можно было судить, что он сильно <em>расстроен</em>».",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40814003,
        englishWord: "upset",
        englishExample: "I believe it might <em>upset</em> her.",
        russianWord: "расстроить",
        russianExample: "Я считаю, что это может <em>расстроить</em> ее.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40813968,
        englishWord: "sore",
        englishExample: "I'm <em>sore</em> from working out.",
        russianWord: "болит",
        russianExample: "А то у меня еще <em>болит</em> после тренировки.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40813958,
        englishWord: "sore",
        englishExample:
          "It is not simply <em>sore</em> muscles after exercise.",
        russianWord: "болях",
        russianExample:
          "И речь сейчас не просто о <em>болях</em> в мышцах после тренировок.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40813929,
        englishWord: "hurt",
        englishExample: "Make me <em>hurt</em> like I've <em>hurt</em> you.",
        russianWord: "больно",
        russianExample:
          "Сделай мне так же <em>больно</em>, как я <em>сделала</em> тебе.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40813920,
        englishWord: "hurt",
        englishExample:
          "You're <em>hurt</em>, I'm <em>hurt</em>, everybody's <em>hurt</em>.",
        russianWord: "больно",
        russianExample:
          "Тебе <em>больно</em>, мне <em>больно</em>, всем <em>больно</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40813882,
        englishWord: "throat",
        englishExample: "I barked so loud I hurt my <em>throat</em>.",
        russianWord: "горлу",
        russianExample:
          "И я кричал так громко, что было больно <em>горлу</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40813864,
        englishWord: "sore throat",
        englishExample:
          "Rhinitis, inflammation of the upper respiratory tract, <em>sore throat</em> - these diseases occurred frequently.",
        russianWord: "ангина",
        russianExample:
          "Ринит, воспаление верхних дыхательных путей, <em>ангина</em> - эти болезни случались часто.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40810136,
        englishWord: "perhaps",
        englishExample:
          "Focus on relaxing and <em>perhaps</em> even meditating.",
        russianWord: "возможно",
        russianExample:
          "Это говорит о еще более глубоком расслаблении и, <em>возможно</em>, о медитации.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40653110,
        englishWord: "get on",
        englishExample:
          "Passengers can <em>get on</em> and off trains in city centres.",
        russianWord: "сесть на",
        russianExample:
          "Пассажиры имеют возможность <em>сесть на</em> поезд и сойти с него в центре города.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40653087,
        englishWord: "hop off",
        englishExample:
          "Simply <em>hop off</em> at one of the bus stops, visit the sights close by and then continue the tour with one of our next busses.",
        russianWord: "отрывайтесь",
        russianExample:
          "Просто <em>отрывайтесь</em> на одной из 13 остановок, осмотреть достопримечательности и затем продолжить тур с одним из наших ближайших автобусов.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40653023,
        englishWord: "Hop on",
        englishExample: "<em>Hop on</em> board and let the journey begin!",
        russianWord: "Прыгай на",
        russianExample: "<em>Прыгай на</em> борт и мы начнем путешествие!",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40652990,
        englishWord: "Squid",
        englishExample:
          "<em>Squid</em> is a female, and each of its eight tentacles in length exceeds the meter.",
        russianWord: "Кальмар",
        russianExample:
          "<em>Кальмар</em> является самкой и каждое из ее восьми щупалец в длину превышает метр.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40652970,
        englishWord: "Peas",
        englishExample:
          "<em>Peas</em> need to soak for a half to two hours to cook it was easier.",
        russianWord: "Горох",
        russianExample:
          "<em>Горох</em> нужно замочить на полтора-два часа, чтобы варить его было легче.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40652768,
        englishWord: "tough",
        englishExample:
          "Broadway is a <em>tough</em>, <em>tough</em> arena for singing.",
        russianWord: "жесткая",
        russianExample:
          "Бродвей - <em>жесткая</em>, <em>жесткая</em> арена для того, чтобы петь.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40652732,
        englishWord: "paddle",
        englishExample:
          "This keeps your <em>paddle</em> tied to you or your boat so that you are less likely to lose them while fishing.",
        russianWord: "весло",
        russianExample:
          "Это удерживает ваше <em>весло</em> привязанным к вам или вашей лодке, так что вы с меньшей вероятностью потеряете их во время рыбалки.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40652641,
        englishWord: "loud",
        englishExample:
          "Our today's game news digest contains another <em>loud</em> announcement.",
        russianWord: "громкий",
        russianExample:
          "Также наш дайджест игровых новостей этой недели включает еще один <em>громкий</em> анонс.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40652580,
        englishWord: "whilst",
        englishExample:
          "Parents cannot leave the hotel <em>whilst</em> children are in our care.",
        russianWord: "пока",
        russianExample:
          "Родители не могут себе позволить жить в гостиницах, <em>пока</em> их дети находятся на лечении.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40652550,
        englishWord: "anger",
        englishExample:
          "<em>Anger</em> is only <em>anger</em> because we collectively call it <em>anger</em>.",
        russianWord: "Гнев",
        russianExample:
          "<em>Гнев</em> - это <em>гнев</em>, потому что мы коллективно называем его <em>гневом</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40652536,
        englishWord: "rid",
        englishExample:
          "I was <em>rid</em> of that burden-and had swallowed another defeat.",
        russianWord: "избавился от",
        russianExample:
          "Я <em>избавился от</em> этого бремени, но вынужден был проглотить еще одно поражение.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40524885,
        englishWord: "That said",
        englishExample:
          "<em>That said</em>, some cheeses are healthier than others.",
        russianWord: "Тем не менее",
        russianExample:
          "<em>Тем не менее</em> некоторые сыры являются более полезными для здоровья, чем другие.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40524864,
        englishWord: "notable",
        englishExample:
          "Progress was also <em>notable</em> in emergency contexts.",
        russianWord: "заметный",
        russianExample:
          "Был достигнут также <em>заметный</em> прогресс в том, что касается деятельности в чрезвычайных ситуациях.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40524792,
        englishWord: "tips",
        englishExample:
          "Here are some <em>tips</em> about using this device properly.",
        russianWord: "советы",
        russianExample:
          "Вот некоторые <em>советы</em> о том, как правильно использовать этот прибор.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40524721,
        englishWord: "surrounded",
        englishExample: "The house we were in was <em>surrounded</em>.",
        russianWord: "окружен",
        russianExample: "Дом, в котором они находились, был <em>окружен</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40524688,
        englishWord: "though",
        englishExample: "Most attacks failed, <em>though</em> some succeeded.",
        russianWord: "но",
        russianExample:
          "При этом большинство атак были неудачными, <em>но</em> несколько все же увенчались успехом.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40524649,
        englishWord: "over time",
        englishExample:
          "Volatility is a measure of how much securities returns vary <em>over time</em>.",
        russianWord: "по времени",
        russianExample:
          "Волатильность - это критерий, определяющий, насколько доходы по ценным бумагам варьируются <em>по времени</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40524614,
        englishWord: "conscious",
        englishExample:
          "This process is partly <em>conscious</em>, but mostly unconscious.",
        russianWord: "осознанный",
        russianExample:
          "Это отчасти <em>осознанный</em>, но большей частью все же бессознательный процесс.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40524599,
        englishWord: "self-conscious",
        englishExample: "I said maybe he's <em>self-conscious</em>.",
        russianWord: "застенчив",
        russianExample: "Я сказала, что может он слишком <em>застенчив</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40524482,
        englishWord: "guided",
        englishExample:
          "Also, some automated <em>guided</em> vehicles and perhaps raise helpers.",
        russianWord: "управляемые",
        russianExample:
          "Кроме того, некоторые автоматизированные <em>управляемые</em> транспортные средства и, возможно, подъем помощников.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40524467,
        englishWord: "reduction",
        englishExample:
          "A <em>reduction</em> in these investments will lead to a <em>reduction</em> in new jobs and, consequently, a <em>reduction</em> in taxes for the Armenian economy.",
        russianWord: "Сокращение",
        russianExample:
          "<em>Сокращение</em> этих инвестиций приведет к <em>сокращению</em> новых рабочих мест и, следовательно, <em>снижению</em> налогов для экономики Армении.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40524454,
        englishWord: "imagery",
        englishExample:
          "These styles often include Islamic principles or <em>imagery</em>.",
        russianWord: "образы",
        russianExample:
          "Эти стили часто включают в себя мусульманские принципы или <em>образы</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40524411,
        englishWord: "self-compassion",
        englishExample:
          "This path of the heart includes self-validation and <em>self-compassion</em>, generating happiness, and the willingness to heal and to be happy.",
        russianWord: "самосознание",
        russianExample:
          "Этот путь сердца включает самоутверждение и <em>самосознание</em>, получение счастья и готовность исцелять и быть счастливыми.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40524376,
        englishWord: "mindfulness",
        englishExample:
          "Overall, parents reported decreased stress and increased <em>mindfulness</em> after completing the course.",
        russianWord: "внимательности",
        russianExample:
          "В целом, в своих отчетах родители сообщали о снижении уровня стресса и увеличении <em>внимательности</em> после прохождения курса.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40524326,
        englishWord: "studies",
        englishExample:
          "These questions need specifically dedicated <em>studies</em>.",
        russianWord: "исследования",
        russianExample:
          "Для того чтобы ответить на эти вопросы, необходимо провести специальные <em>исследования</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40524184,
        englishWord: "effort involved",
        englishExample:
          "The <em>effort involved</em> in the construction of aircraft T-4, were not in vain.",
        russianWord: "Усилия, затраченные",
        russianExample:
          "<em>Усилия, затраченные</em> на постройку самолета Т-4, не были напрасными.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40524157,
        englishWord: "payoff",
        englishExample:
          "Each triangle has a <em>payoff</em> for those playing it.",
        russianWord: "выигрыш",
        russianExample:
          "Каждый треугольник имеет <em>выигрыш</em> для тех, кто играет в него.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40524131,
        englishWord: "tencion",
        englishExample:
          "This increases <em>tension</em> domestically and with neighbouring Uzbekistan.",
        russianWord: "напряженность",
        russianExample:
          "Это увеличивает <em>напряженность</em> как внутри страны, так и в отношениях с соседним Узбекистаном.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40524120,
        englishWord: "tencion",
        englishExample:
          "Notice the areas of your body that are holding <em>tension</em>.",
        russianWord: "напряжение",
        russianExample:
          "Направьте свое внимание в те части тела, где есть сильное <em>напряжение</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40524097,
        englishWord: "cessation",
        englishExample:
          "Article 30 highlighted the crucial elements of <em>cessation</em> and non-repetition.",
        russianWord: "прекращения",
        russianExample:
          "В статье 30 обращено особое внимание на важнейшие элементы <em>прекращения</em> и неповторения.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40524088,
        englishWord: "improvement",
        englishExample:
          "User experience needs constant attention and continuous <em>improvement</em>.",
        russianWord: "улучшению",
        russianExample:
          "Пользовательский опыт - это то, что всегда требует внимания к себе и постоянному <em>улучшению</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40524079,
        englishWord: "sounder",
        englishExample:
          "Estonia is supportive of the view that the United Nations should be put on a <em>sounder</em> financial footing.",
        russianWord: "более прочную",
        russianExample:
          "Эстония поддерживает точку зрения о том, что Организации Объединенных Наций необходимо обеспечить <em>более прочную</em> финансовую основу.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40524064,
        englishWord: "anxiety",
        englishExample:
          "In fact, the same person may react differently to mild <em>anxiety</em> and high <em>anxiety</em>.",
        russianWord: "тревогу",
        russianExample:
          "Фактически, один и тот же человек может по-разному реагировать на легкую <em>тревогу</em> и сильную <em>тревогу</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40524049,
        englishWord: "reduced",
        englishExample:
          "That <em>reduced</em> population means <em>reduced</em> demand for electricity, food, travel, buildings and all other resources.",
        russianWord: "Сокращение",
        russianExample:
          "<em>Сокращение</em> населения означает <em>снижение</em> спроса на электричество, еду, путешествия, здания и все другие ресурсы.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40524025,
        englishWord: "angle",
        englishExample: "Because look, if I drew this <em>angle</em> here.",
        russianWord: "угол",
        russianExample:
          "Потому что, посмотрите, если я нарисую этот <em>угол</em> здесь...",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40523993,
        englishWord: "almost",
        englishExample: "Sales to these markets <em>almost</em> tripled.",
        russianWord: "практически",
        russianExample:
          "Мы смогли увеличить объемы продаж на эти рынки <em>практически</em> в три раза.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40523974,
        englishWord: "thus",
        englishExample: "12), and <em>thus</em> willfully resist it.",
        russianWord: "поэтому",
        russianExample: "12) и <em>поэтому</em> упрямо противятся ей (2 Тим.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40523962,
        englishWord: "recognize",
        englishExample:
          "Thus they could <em>recognize</em> that progress can be mutually reinforcing.",
        russianWord: "признать",
        russianExample:
          "Таким образом, они могли бы <em>признать</em>, что прогресс может быть взаимно усиливающим.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40523943,
        englishWord: "recognize",
        englishExample:
          "21st century challenges <em>recognize</em> no borders.",
        russianWord: "признают",
        russianExample:
          "В 21-м веке есть множество глобальных проблем, которые не <em>признают</em> границ.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40523939,
        englishWord: "recognizing",
        englishExample:
          "Different felinology system <em>recognizing</em> British longhaired breed, treated the subject differently.",
        russianWord: "признавая",
        russianExample:
          "Разные фелинологические системы, <em>признавая</em> британскую длинношёрстную породу, отнеслись к этому вопросу по разному.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40523936,
        englishWord: "recognizing",
        englishExample:
          "She also added that <em>recognizing</em> Karabakh could only benefit Armenia.",
        russianWord: "признание",
        russianExample:
          "Она также добавила, что <em>признание</em> Карабаха может принести Армении только пользу.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40523917,
        englishWord: "it was first",
        englishExample:
          "When <em>it was first</em> launched, facebook was actually called thefacebook.",
        russianWord: "он был впервые",
        russianExample:
          "Когда <em>он был впервые</em> запущен, Facebook фактически назывался thefacebook.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40523875,
        englishWord: "postures",
        englishExample:
          "It involved physical <em>postures</em> and breathing exercising combined with meditation.",
        russianWord: "позы",
        russianExample:
          "Она включает в себя физические <em>позы</em> и дыхательные упражнения в сочетании с медитацией.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40523858,
        englishWord: "consider",
        englishExample:
          "It should also <em>consider</em> alternatives to detention.",
        russianWord: "рассмотреть",
        russianExample:
          "Ему также следует <em>рассмотреть</em> меры, которые могут применяться в качестве альтернативы содержанию под стражей.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40523852,
        englishWord: "consider",
        englishExample:
          "Experts <em>consider</em> it pathological whenever it negatively impacts behavior.",
        russianWord: "считают",
        russianExample:
          "Эксперты <em>считают</em> такое сочетание симптомов патологическим всякий раз, когда это негативно и разрушительно влияет на поведение страдающего.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40523848,
        englishWord: "consider",
        englishExample:
          "Many Unitarian Universalists <em>consider</em> themselves pantheists.",
        russianWord: "считают",
        russianExample:
          "Среди унитарных универсалистов (англ.) многие <em>считают</em> себя пантеистами.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40523841,
        englishWord: "considered",
        englishExample:
          "She was armed and <em>considered</em> extremely dangerous.",
        russianWord: "считается",
        russianExample:
          'По его словам, она "была вооружена и <em>считается</em> чрезвычайно опасной".',
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40523832,
        englishWord: "numerous",
        englishExample:
          "Technical meetings on Summit follow-up have involved <em>numerous</em> regional institutions.",
        russianWord: "многочисленные",
        russianExample:
          "В работе технических совещаний, посвященных последующей деятельности по результатам Встречи на высшем уровне, участвовали <em>многочисленные</em> региональные учреждения.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40523823,
        englishWord: "whether",
        englishExample:
          "He wondered <em>whether</em> they included procedural safeguards.",
        russianWord: "ли",
        russianExample:
          "Ему, в частности, хотелось бы знать, содержать <em>ли</em> они процессуальные гарантии.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42791194,
        englishWord: "easier said than done",
        englishExample: "This is <em>easier said than done</em>.",
        russianWord: "легче сказать, чем сделать",
        russianExample: "Конечно, это <em>легче сказать, чем сделать</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42791170,
        englishWord: "made it to",
        englishExample:
          "Columbus <em>made it to</em> the island, but thousands of other adventurers were not so lucky.",
        russianWord: "добрался до",
        russianExample:
          "Колумб <em>добрался до</em> острова, но тысячи других искателей приключений были не настолько удачливы.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42791146,
        englishWord: "safe and sound",
        englishExample: "She might be home already, <em>safe and sound</em>.",
        russianWord: "в целости и сохранности",
        russianExample:
          "Она, должно быть, уже дома, <em>в целости и сохранности</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42791131,
        englishWord: "stay tuned",
        englishExample:
          "A decision is expected shortly, so <em>stay tuned</em>! .",
        russianWord: "следите за обновлениями",
        russianExample:
          "Решение ожидается в ближайшее время, поэтому <em>следите за обновлениями</em>!».",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42791093,
        englishWord: "encourage",
        englishExample:
          "Lets <em>encourage</em> these industries instead of punish them.",
        russianWord: "поощрять",
        russianExample:
          "В интересах государства <em>поощрять</em>, а не наказывать такие предприятия.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42791077,
        englishWord: "encourage",
        englishExample:
          "We will <em>encourage</em> education exchanges, including in civilian professions.",
        russianWord: "поощрять",
        russianExample:
          "Будем <em>поощрять</em> и образовательные обмены, в том числе по гражданским специальностям.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42790997,
        englishWord: "adorable",
        englishExample: "Their puppy was also very <em>adorable</em>.",
        russianWord: "очаровательна",
        russianExample:
          "О, его собака также была просто <em>очаровательна</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42790959,
        englishWord: "trauma",
        englishExample:
          "Usually these feelings come from unresolved childhood <em>trauma</em>.",
        russianWord: "травмы",
        russianExample:
          "Причиной таких эмоций, как правило, являются непроработанные детские <em>травмы</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42790925,
        englishWord: "en masse",
        englishExample:
          "Businesses would close <em>en masse</em>, unable to raise finance.",
        russianWord: "в массовом порядке",
        russianExample:
          "Предприятия стали бы <em>в массовом порядке</em> закрываться, не имея возможности привлечь финансирование.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42790892,
        englishWord: "properly",
        englishExample:
          "Make sure cable is seated <em>properly</em> at both ends.",
        russianWord: "надлежащим образом",
        russianExample:
          "Удостоверьтесь, что все кабели <em>надлежащим образом</em> закреплены на обоих концах.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42790850,
        englishWord: "counseling",
        englishExample: "But I do think you need <em>counseling</em>.",
        russianWord: "консультация",
        russianExample:
          "Но все-таки я думаю, что вам нужна <em>консультация</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42790802,
        englishWord: "furious",
        englishExample:
          "They were obviously <em>furious</em> that the dog survived.",
        russianWord: "в ярости",
        russianExample:
          "Очевидно, они были <em>в ярости</em>, что собака выжила.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42790782,
        englishWord: "grave",
        englishExample: "The lovers were buried in the same <em>grave</em>.",
        russianWord: "могиле",
        russianExample:
          "«Возлюбленные были похоронены в одной и той же <em>могиле</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42790743,
        englishWord: "betrayal",
        englishExample:
          "He sees <em>betrayal</em> and conspiracies everywhere.",
        russianWord: "измена",
        russianExample:
          "Везде и всюду ему виделись заговоры и <em>измена</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42790705,
        englishWord: "cupboard",
        englishExample: "Get what you want from the <em>cupboard</em>.",
        russianWord: "шкафу",
        russianExample: "Ничего, возьмите, что нужно, в <em>шкафу</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42790643,
        englishWord: "flight attendant",
        englishExample:
          "This <em>flight attendant</em> instructed passengers to calm down, which they immediately completed.",
        russianWord: "стюардесса",
        russianExample:
          "Эта <em>стюардесса</em> дала пассажирам указание успокоиться, что те сразу и выполнили.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42790631,
        englishWord: "attendant",
        englishExample:
          "The recommendations concerning the remaining two requests, together with the <em>attendant</em> documentation, will be transmitted once approved by the Committee.",
        russianWord: "сопутствующей",
        russianExample:
          "Рекомендации относительно остальных двух просьб вместе с <em>сопутствующей</em> документацией будут представлены после одобрения Комитетом.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42790615,
        englishWord: "attendant",
        englishExample:
          "Our <em>attendant</em> will be happy to talk about all the places and the kitchen.",
        russianWord: "сопровождающий",
        russianExample:
          "Наш <em>сопровождающий</em> с удовольствием расскажет о всех местах и кухне.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42790580,
        englishWord: "housewarming",
        englishExample: "I sent her a <em>housewarming</em> gift.",
        russianWord: "к новоселью",
        russianExample: "Я отослала ей подарок <em>к новоселью</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42790560,
        englishWord: "worse",
        englishExample: "Then things became <em>worse</em> and <em>worse</em>.",
        russianWord: "хуже",
        russianExample:
          "Дальше все становилось <em>хуже</em> и <em>хуже</em>».",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42790493,
        englishWord: "deserve",
        englishExample: "I <em>deserve</em> to be set free.",
        russianWord: "заслуживаю",
        russianExample: "Я <em>заслуживаю</em>, чтобы меня оставили в покое.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42790486,
        englishWord: "effort",
        englishExample:
          "We can attach to the plane any <em>effort</em>, great <em>effort</em>, little <em>effort</em>.",
        russianWord: "усилие",
        russianExample:
          "Мы можем приложить к плоскости любое <em>усилие</em>, большое <em>усилие</em>, малое <em>усилие</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42790468,
        englishWord: "fork",
        englishExample: "Let's go back to the <em>fork</em> and turn left now.",
        russianWord: "развилке",
        russianExample:
          "Вернёмся к <em>развилке</em> и повернём теперь налево.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42790458,
        englishWord: "fork",
        englishExample: "How to hold their <em>fork</em> and knife.",
        russianWord: "вилку",
        russianExample: "«Как правильно держать <em>вилку</em> и нож?».",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42790395,
        englishWord: "pick up",
        englishExample:
          "Come on, come on, <em>pick up</em>, <em>pick up</em>, please.",
        russianWord: "ответь мне",
        russianExample: "Давай, давай, <em>ответь мне</em>, пожалуйста.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42790357,
        englishWord: "pick up",
        englishExample: "You can <em>pick up</em> a parasite anywhere.",
        russianWord: "подцепить",
        russianExample:
          "Если подумать, каких-нибудь паразитов можно <em>подцепить</em> где угодно.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42790351,
        englishWord: "pick up",
        englishExample:
          "You can literally <em>pick up</em> anything using chopsticks.",
        russianWord: "подобрать",
        russianExample:
          "Ты можешь буквально <em>подобрать</em> что угодно, используя палочки для еды.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42790302,
        englishWord: "affect",
        englishExample: "Market forces may also <em>affect</em> wage levels.",
        russianWord: "влиять на",
        russianExample:
          "Факторы, существующие на рынке труда, могут также <em>влиять на</em> уровни зарплат.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42790275,
        englishWord: "hilarious",
        englishExample:
          "Will&amp;Grace is a <em>hilarious</em> series about two best friends.",
        russianWord: "смешной",
        russianExample:
          "Уилл и Грэйс - это потрясающе <em>смешной</em> сериал о двух лучших друзьях.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42790264,
        englishWord: "fancy",
        englishExample:
          "Or maybe she only reads <em>fancy</em> French newspapers.",
        russianWord: "модные",
        russianExample:
          "Или, может быть, она читает только <em>модные</em> французские журналы.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42790241,
        englishWord: "finger food",
        englishExample:
          "Tea and coffee are available 24 hours a day in the lobby bar, which also serves a range of fine pastries and <em>finger food</em>.",
        russianWord: "закуски",
        russianExample:
          "В лобби-баре круглосуточно подают чай и кофе, а также вкусную выпечку и <em>закуски</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42790222,
        englishWord: "appointment",
        englishExample: "Sorry Clark I have an <em>appointment</em>...",
        russianWord: "встреча",
        russianExample: "Я сожалею, Кларк, у меня <em>встреча</em>...",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42790204,
        englishWord: "appointment",
        englishExample:
          "Hymie has his first well baby <em>appointment</em> today.",
        russianWord: "приём",
        russianExample:
          "У Хайми сегодня первый <em>приём</em> у педиатра в детской больнице.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42790200,
        englishWord: "appointment",
        englishExample:
          "Justified his <em>appointment</em> with fungal, bacterial and parasitic infections.",
        russianWord: "назначение",
        russianExample:
          "Вполне обоснованным будет его <em>назначение</em> при грибковых, бактериальных и паразитарных инфекциях.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42790175,
        englishWord: "offend",
        englishExample:
          "I'm surprised he could do anything to <em>offend</em> you.",
        russianWord: "обидеть",
        russianExample:
          "Я удивлен, что он смог сделать такое, чтобы <em>обидеть</em> тебя.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42790127,
        englishWord: "assume",
        englishExample:
          "You cannot just pick any VPN service and <em>assume</em> it will serve.",
        russianWord: "предположить",
        russianExample:
          "Вы не можете просто выбрать любой VPN-сервис и <em>предположить</em>, что он будет служить верно.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42790101,
        englishWord: "thrilled",
        englishExample: "Still, your mom must be <em>thrilled</em>.",
        russianWord: "взволнована",
        russianExample: "И все же, твоя мама должно быть <em>взволнована</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42790100,
        englishWord: "thrilled",
        englishExample:
          "We are totally <em>thrilled</em> by the way it sounds.",
        russianWord: "восторге от",
        russianExample:
          "И мы были в полном <em>восторге от</em> того, как он звучит.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42790064,
        englishWord: "admirable",
        englishExample:
          "What is most <em>admirable</em> about him is that he is not self-satisfied.",
        russianWord: "замечательное",
        russianExample:
          "Самое <em>замечательное</em> в нем то, что он не превозносит себя.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42789980,
        englishWord: "gatherings",
        englishExample:
          "I stopped attending any <em>gatherings</em> and functions.",
        russianWord: "собрания",
        russianExample: "И я перестала посещать <em>собрания</em> и встречи.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42789958,
        englishWord: "facilities",
        englishExample:
          "Other room <em>facilities</em>: safe, and tea and coffee making <em>facilities</em>.",
        russianWord: "удобства",
        russianExample:
          "Дополнительные <em>удобства</em> номера - сейф и возможность приготовления горячего <em>кофе</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42789905,
        englishWord: "curious",
        englishExample: "I thought you might be <em>curious</em>.",
        russianWord: "любопытно",
        russianExample: "Я думала, что вам может быть <em>любопытно</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42789872,
        englishWord: "obviously",
        englishExample:
          "You're <em>obviously</em> interested since you're reading this post.",
        russianWord: "Очевидно",
        russianExample:
          "<em>Очевидно</em>, вы тоже заинтересованы в этом вопросе, поскольку читаете данную статью.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42789858,
        englishWord: "asshole",
        englishExample: "Let's talk like <em>asshole</em> to <em>asshole</em>.",
        russianWord: "мудак",
        russianExample:
          "Давай поговорим как <em>мудак</em> с <em>мудаком</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42789854,
        englishWord: "asshole",
        englishExample: "I'm one part robot, three parts <em>asshole</em> .",
        russianWord: "засранец",
        russianExample:
          "Я на одну четверть робот, а на три четверти - <em>засранец</em> .",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42789766,
        englishWord: "willing to",
        englishExample:
          "But they are <em>willing to</em> invest in good ideas.",
        russianWord: "готовы",
        russianExample:
          "А ведь есть люди, которые <em>готовы</em> инвестировать в хорошие идеи.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42789738,
        englishWord: "brag",
        englishExample:
          "Maybe there was nothing to <em>brag</em> but it is worth attention.",
        russianWord: "хвастаться",
        russianExample:
          "Может быть, нечего было <em>хвастаться</em>, но она стоит внимания.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42789721,
        englishWord: "fault",
        englishExample: "This is entirely your own <em>fault</em>.",
        russianWord: "вина",
        russianExample: "И в этом была только его <em>вина</em>».",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42789708,
        englishWord: "terrific",
        englishExample: "We all thought she was <em>terrific</em>.",
        russianWord: "потрясающий",
        russianExample: "Мы все думали, что он - <em>потрясающий</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42789691,
        englishWord: "grabbed",
        englishExample: "I quickly <em>grabbed</em> every spoon on the table.",
        russianWord: "схватила",
        russianExample:
          "Я быстро <em>схватила</em> все ложки, которые лежали на столе.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42789674,
        englishWord: "humiliating",
        englishExample:
          "When I was first injured, it was very <em>humiliating</em>.",
        russianWord: "унизительно",
        russianExample:
          "Когда я был ранен в первый раз, это было очень <em>унизительно</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42789656,
        englishWord: "innocent",
        englishExample: "She's just an <em>innocent</em> child.",
        russianWord: "невинный",
        russianExample:
          "Я убежден, что она - всего лишь <em>невинный</em> ребенок.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42789647,
        englishWord: "have a crush on",
        englishExample: "I think you <em>have a crush on</em> my wife.",
        russianWord: "запала на",
        russianExample: "Кажется, ты <em>запала на</em> мою жену.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42789602,
        englishWord: "ample",
        englishExample:
          "Whenever possible, you want a location that has <em>ample</em> parking for your visitors.",
        russianWord: "достаточную",
        russianExample:
          "Когда бы ни было возможно, вы хотите место, которое имеет <em>достаточную</em> парковку для ваших посетителей.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42789587,
        englishWord: "newcomers",
        englishExample:
          "Good for <em>newcomers</em> because its interface looks like windows one.",
        russianWord: "новичков",
        russianExample:
          "Хорошо для <em>новичков</em>, потому что его интерфейс выглядит как окна один.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42789570,
        englishWord: "swore",
        englishExample: "He <em>swore</em> he'd never harm a child.",
        russianWord: "поклялся",
        russianExample:
          "Он <em>поклялся</em> в том, что никогда не обидит ребенка.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42789564,
        englishWord: "legit",
        englishExample:
          "I'll, I'll make this look like a <em>legit</em> marriage.",
        russianWord: "законный",
        russianExample:
          "Я сделаю так, чтобы это выглядело как <em>законный</em> брак.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42789556,
        englishWord: "exhausted",
        englishExample: "But I felt more <em>exhausted</em> than ever.",
        russianWord: "измотанным",
        russianExample:
          "Но вместо этого я чувствовал себя более <em>измотанным</em>, чем когда-либо.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42789553,
        englishWord: "exhausted",
        englishExample: "60% feel <em>exhausted</em> and underpaid.",
        russianWord: "переутомились",
        russianExample:
          "60 процентов считают, что они <em>переутомились</em>, и что им недоплачивают.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42789536,
        englishWord: "provoked",
        englishExample:
          "Sea snakes are usually not aggressive unless <em>provoked</em> or cornered.",
        russianWord: "спровоцированы",
        russianExample:
          "Морские змеи обычно не агрессивны, если не <em>спровоцированы</em> или загнаны в угол.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42789527,
        englishWord: "suppress",
        englishExample:
          "Nowadays various life spheres and conditions make you <em>suppress</em> your feelings.",
        russianWord: "подавлять",
        russianExample:
          "В настоящее время различные сферы жизни и условия заставляют вас <em>подавлять</em> ваши чувства.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42789519,
        englishWord: "grateful",
        englishExample:
          "We are <em>grateful</em> even before we have something.",
        russianWord: "благодарны",
        russianExample:
          "Мы <em>благодарны</em> ещё до того, как мы что-либо имеем.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42789507,
        englishWord: "acknowledge",
        englishExample:
          "To achieve it, we must first <em>acknowledge</em> the challenge.",
        russianWord: "признать",
        russianExample:
          "Для достижения этого мы должны в первую очередь <em>признать</em> необходимость решения этой задачи.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42677548,
        englishWord: "turn up",
        englishExample: "They <em>turn up</em> after everyone else.",
        russianWord: "Появляются",
        russianExample:
          "<em>Появляются</em> они после того, как прорежутся все остальные.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42677483,
        englishWord: "in-laws",
        englishExample: "So you get the <em>in-laws</em> and I get siberia.",
        russianWord: "родственники",
        russianExample:
          "Так что у тебя будут <em>родственники</em>, а у меня Сибирь.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42677415,
        englishWord: "get the ball rolling",
        englishExample:
          "What looks like it wants a name in this problem? ) until they <em>get the ball rolling</em> on their own.",
        russianWord: "сдвинуться с мертвой точки",
        russianExample:
          "Похоже, что он хочет имя в эту проблему? ) пока они <em>сдвинуться с мертвой точки</em> самостоятельно.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42677384,
        englishWord: "announce",
        englishExample: "See if he has anything we can <em>announce</em>.",
        russianWord: "объявить",
        russianExample:
          "Ну, посмотри, есть ли у него что-то, о чём мы можем <em>объявить</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42677318,
        englishWord: "suggest",
        englishExample: "I <em>suggest</em> you think the same.",
        russianWord: "предлагаю",
        russianExample:
          "И <em>предлагаю</em> и вам тоже подумать о том же самом.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42677268,
        englishWord: "roll over",
        englishExample: "A man begins to twist his head, <em>roll over</em>.",
        russianWord: "переворачиваться",
        russianExample:
          "Человек начинает крутить головой, <em>переворачиваться</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42677186,
        englishWord: "charm",
        englishExample: "And that is its primary <em>charm</em>.",
        russianWord: "очарование",
        russianExample:
          "И именно в этом заключается его главное <em>очарование</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42677099,
        englishWord: "negotiating",
        englishExample: "Nobody will know we're <em>negotiating</em>.",
        russianWord: "переговоры",
        russianExample: "Никто не узнает, что мы вели <em>переговоры</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42677017,
        englishWord: "silly",
        englishExample: "He was young and obviously <em>silly</em>.",
        russianWord: "глупый",
        russianExample:
          "А он был молодой и - честно сказать - <em>глупый</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42676965,
        englishWord: "stranger",
        englishExample: "Well, you were a <em>stranger</em> once.",
        russianWord: "незнакомцем",
        russianExample: "Да. Ну, когда-то и вы были <em>незнакомцем</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42676922,
        englishWord: "forced",
        englishExample:
          "Many children are <em>forced</em> to work instead of attend school.",
        russianWord: "вынуждены",
        russianExample:
          "Многие из них <em>вынуждены</em> работать, вместо того чтобы ходить в школу.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42676681,
        englishWord: "arrangement",
        englishExample:
          "The menu selection may be adjusted upon previous <em>arrangement</em>.",
        russianWord: "соглашения",
        russianExample:
          "Выбор меню может быть изменён по вашему желанию после предварительного <em>соглашения</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42676610,
        englishWord: "divorce",
        englishExample: "The <em>divorce</em> was apparently never finalized.",
        russianWord: "развод",
        russianExample:
          "Однако, <em>развод</em>, по-видимому, так и не был оформлен.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42676558,
        englishWord: "jealous",
        englishExample: "Maybe because I'm not <em>jealous</em>.",
        russianWord: "ревнивый",
        russianExample: "Может, это потому, что я не <em>ревнивый</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42676526,
        englishWord: "affair",
        englishExample: "For two years they kept their <em>affair</em> secret.",
        russianWord: "роман",
        russianExample:
          "В течение двух лет они держали в тайне свой <em>роман</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42626752,
        englishWord: "avengers",
        englishExample:
          "I am actually looking forward to this movie more than the <em>avengers</em>.",
        russianWord: "Мстителей",
        russianExample: "Я этот фильм ждал больше чем <em>Мстителей</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42566447,
        englishWord: "clause",
        englishExample: "Maybe your contract has a morals <em>clause</em>.",
        russianWord: "пункт",
        russianExample:
          "Может, в твоем контракте есть <em>пункт</em>, касающийся твоего поведения.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42546553,
        englishWord: "car chase",
        englishExample: "Maybe get into a high-speed <em>car chase</em>.",
        russianWord: "автомобильную погоню",
        russianExample:
          "Может попадём в скоростную <em>автомобильную погоню</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42546484,
        englishWord: "defeat",
        englishExample: "Sadly both games ended in <em>defeat</em>.",
        russianWord: "поражениями",
        russianExample:
          "Оба матча, к сожалению, закончились <em>поражениями</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42446586,
        englishWord: "Fumes",
        englishExample:
          "These gases and <em>fumes</em> may be toxic and inhalation should always be avoided.",
        russianWord: "пары",
        russianExample:
          "Эти газы и <em>пары</em> могут быть токсичными, поэтому следует избегать их вдыхания.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42446543,
        englishWord: "forge",
        englishExample:
          "This is one of the best ways you can <em>forge</em> lasting relationships with your customers.",
        russianWord: "наладить",
        russianExample:
          "Это один из лучших способов <em>наладить</em> долгосрочные отношения с вашими клиентами.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42446538,
        englishWord: "forge",
        englishExample: "He can actually <em>forge</em> all of our signatures.",
        russianWord: "подделать",
        russianExample:
          "Он, по правде говоря, может <em>подделать</em> все наши подписи.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42424111,
        englishWord: "heating",
        englishExample:
          "In 2015, natural gas <em>heating</em> costs were lower than electric <em>heating</em>.",
        russianWord: "отопление",
        russianExample:
          "В 2015 году затраты на <em>отопление</em> природным газом были ниже, чем на электрическое <em>отопление</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42424066,
        englishWord: "complaint",
        englishExample:
          "But every letter of <em>complaint</em> reaches our office.",
        russianWord: "жалобы",
        russianExample:
          "Но на все письменные <em>жалобы</em> в наш адрес мы реагируем.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42423402,
        englishWord: "get stuck",
        englishExample: "I worry he'll <em>get stuck</em>.",
        russianWord: "застрянет",
        russianExample: "Я беспокоюсь о том, что он <em>застрянет</em>.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42423304,
        englishWord: "stuck",
        englishExample: "You're <em>stuck</em> in this endless loop",
        russianWord: "застрял",
        russianExample:
          "Ты <em>застрял</em> в этом бесконечном цикле, так ничего и не добившись?",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42423275,
        englishWord: "crashing",
        englishExample:
          "This will immediately tell you if the <em>crashing</em> of the Youtube app is caused by a third party or not.",
        russianWord: "сбой",
        russianExample:
          "Это сразу скажет вам, вызван ли <em>сбой</em> приложения Youtube третьей стороной или нет.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42423208,
        englishWord: "litter",
        englishExample:
          "Peat is needed as a <em>litter</em> for animals, because it can absorb moisture and odors well.",
        russianWord: "подстилка",
        russianExample:
          'Здесь торф нужен как <em class="both">подстилка</em> для животных, потому что может хорошо поглощать влагу и запахи.',
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42423172,
        englishWord: "faulty",
        englishExample:
          "Less likely is a <em>faulty</em> thermostat that needs replacement.",
        russianWord: "неисправный",
        russianExample:
          "Менее вероятно, является <em>неисправный</em> термостат, который нуждается в замене.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42423142,
        englishWord: "litter",
        englishExample:
          "This year, some 6,000 volunteers cleaned 364 beaches and recorded the <em>litter</em> they found.",
        russianWord: "мусор",
        russianExample:
          "В этом году около 6 тыс. добровольцев очистили 364 пляжей и записали весь <em>мусор</em>, который они нашли.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 42423132,
        englishWord: "litter",
        englishExample:
          "Average number of young voles in every <em>litter</em> is 6 to 8.",
        russianWord: "помете",
        russianExample: "Среднее число молодых в каждом <em>помете</em> - 6-8.",
        association: "",
        groupId: 1675754378680,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43503135,
        englishWord: "get lost",
        englishExample:
          "You may <em>get lost</em>, but that's part of the adventure.",
        russianWord: "заблудиться",
        russianExample:
          "Здесь легко <em>заблудиться</em>, но это часть приключения.",
        association: "",
        groupId: 1676525658228,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43503105,
        englishWord: "injured",
        englishExample:
          "Hazel Hawkins Hospital admitted 50 <em>injured</em> people.",
        russianWord: "раненых",
        russianExample:
          "Госпиталь Бикур Холим подтвердил, что принял 15 <em>раненых</em>.",
        association: "",
        groupId: 1676525658228,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43503100,
        englishWord: "injure",
        englishExample:
          "Exercising is hazardous for older people because they may <em>injure</em> themselves.",
        russianWord: "травмировать",
        russianExample:
          "Занятия спортом опасны для пожилых людей, потому что они могут <em>травмировать</em> себя.",
        association: "",
        groupId: 1676525658228,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43503086,
        englishWord: "over work",
        englishExample:
          "Avoid mental strain, <em>over work</em>, or too much pleasures of a physical nature.",
        russianWord: "чрезмерной работы",
        russianExample:
          "Избегайте умственного напряжения, <em>чрезмерной работы</em> или чрезмерных удовольствий физической природы.",
        association: "",
        groupId: 1676525658228,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43501958,
        englishWord: "pay rise",
        englishExample:
          "You will be in a better position to justify your request for a <em>pay rise</em> by listing your new tasks.",
        russianWord: "повышение заработной платы",
        russianExample:
          "Вы будете в лучшем положении, чтобы оправдать свой запрос на <em>повышение заработной платы</em>, перечисляя свои новые задачи.",
        association: "",
        groupId: 1676525658228,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43501948,
        englishWord: "argument",
        englishExample:
          "For example, this could mean a public <em>argument</em> with someone.",
        russianWord: "спор",
        russianExample:
          'Например, это может означать публичный <em class="both">спор</em> с кем-то.',
        association: "",
        groupId: 1676525658228,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43501925,
        englishWord: "last",
        englishExample:
          "We asked whether this effect might <em>last</em> longer than 1 day.",
        russianWord: "длиться",
        russianExample:
          'Мы спросили, будет ли этот эффект может <em class="both">длиться</em> дольше, чем 1 день.',
        association: "",
        groupId: 1676525658228,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43743900,
        englishWord: "miracle",
        englishExample:
          "Sometimes I just hope a <em>miracle</em> could happen.",
        russianWord: "чудо",
        russianExample:
          "Я всегда верю в то, что <em>чудо</em> может произойти.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43743813,
        englishWord: "postpone",
        englishExample:
          "Everybody can <em>postpone</em> the choice but nobody can escape it.",
        russianWord: "отложить",
        russianExample:
          "Все могут <em>отложить</em> выбор на более поздний срок, но никто не сможет избежать его.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43742405,
        englishWord: "occupy",
        englishExample:
          "Then woman will <em>occupy</em> the same position as men.",
        russianWord: "занимать",
        russianExample:
          "Тогда женщина будет <em>занимать</em> такое же положение, как и мужчина».",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43742402,
        englishWord: "occupy",
        englishExample:
          "Two bodies cannot <em>occupy</em> the same place in space.",
        russianWord: "занимать",
        russianExample:
          "Два тела не могут <em>занимать</em> одно и то же место в пространстве.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43742246,
        englishWord: "throw",
        englishExample: "You may <em>throw</em> a stone at me.",
        russianWord: "бросить",
        russianExample: "Да, да, можете <em>бросить</em> в меня камень.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43742150,
        englishWord: "trunks",
        englishExample:
          "Wish we could, but I didn't bring swimming <em>trunks</em>.",
        russianWord: "плавки",
        russianExample: "Хотелось бы, но я <em>плавки</em> не взял.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43742137,
        englishWord: "boots",
        englishExample:
          "Wear good walking/hiking <em>boots</em> and don't allow children unsupervised.",
        russianWord: "ботинки",
        russianExample:
          "Наденьте хорошие прогулочные или походные <em>ботинки</em> и не оставляйте детей без присмотра.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43742115,
        englishWord: "pitch",
        englishExample:
          "Malynovsky spent all 90 minutes on the <em>pitch</em>.",
        russianWord: "поле",
        russianExample:
          "Отметим, что Малиновский провел все 90 минут на <em>поле</em>.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43742091,
        englishWord: "racket",
        englishExample: "Pardon me, but that is my <em>racket</em>.",
        russianWord: "ракетка",
        russianExample: "Простите, но это моя <em>ракетка</em>.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43742065,
        englishWord: "gear",
        englishExample:
          "Starting tonight, fans can bid live on in-game sports <em>gear</em>.",
        russianWord: "снаряжение",
        russianExample:
          "Начиная с вечера, фанаты могут делать ставки в прямом эфире на игровое спортивное <em>снаряжение</em>.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43741821,
        englishWord: "adopt",
        englishExample: "Section 231 regulates who may <em>adopt</em> a child.",
        russianWord: "усыновить",
        russianExample:
          "Статьей 127 определены критерии граждан, которые могут <em>усыновить</em> ребенка.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43741814,
        englishWord: "adopt",
        englishExample: "She will <em>adopt</em> them if no one claims them.",
        russianWord: "принять",
        russianExample:
          "Мы их можем <em>принять</em> только при условии, что никто не будет на них претендовать.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43741734,
        englishWord: "hardy",
        englishExample:
          "Very <em>hardy</em>, and tolerates dry weather and lowering the temperature.",
        russianWord: "выносливый",
        russianExample:
          "Очень <em>выносливый</em> вид, хорошо переносит и засушливую погоду, и понижение температуры.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43741706,
        englishWord: "stamina",
        englishExample: "Not just a test of strength but <em>stamina</em>.",
        russianWord: "выносливость",
        russianExample:
          "Испытание не только на силу, но и на <em>выносливость</em>.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43741662,
        englishWord: "Strength",
        englishExample: "<em>Strength</em> makes us who we are.",
        russianWord: "Сила",
        russianExample: "<em>Сила</em> делает нас теми, кто мы есть.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43741140,
        englishWord: "sophisticated",
        englishExample:
          "It is not true that you are a <em>sophisticated</em> animal, even though your body is a <em>sophisticated</em> animal.",
        russianWord: "усовершенствованное",
        russianExample:
          "Это неправда, что вы <em>усовершенствованное</em> животное, даже если ваше тело и является <em>усовершенствованным</em> животным.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43740812,
        englishWord: "sophisticated",
        englishExample:
          "Simple design always requires less time and money than <em>sophisticated</em> one.",
        russianWord: "сложный",
        russianExample:
          "Простой дизайн всегда требует меньше времени и денег для реализации, чем <em>сложный</em>.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43740743,
        englishWord: "self expression",
        englishExample: "Beauty to her is <em>self expression</em>.",
        russianWord: "самовыражение",
        russianExample:
          "Красота, с моей точки зрения, это <em>самовыражение</em>.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43740724,
        englishWord: "trashed",
        englishExample: "What wasn't burned was <em>trashed</em>.",
        russianWord: "разграблено",
        russianExample: "То, что не сгорело, было <em>разграблено</em>.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43740718,
        englishWord: "trashed",
        englishExample:
          "I know you were sober when you <em>trashed</em> that hotel suite.",
        russianWord: "разгромили",
        russianExample:
          "Я знаю, что вы были трезвым, когда <em>разгромили</em> номер в отеле.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43740706,
        englishWord: "tight",
        englishExample: "Maybe his shoes were too <em>tight</em>.",
        russianWord: "тесные",
        russianExample: "Может, у него туфли были слишком <em>тесные</em>.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43740694,
        englishWord: "tight",
        englishExample:
          "In the future competition for resources will be <em>tight</em>.",
        russianWord: "жесткой",
        russianExample:
          "Что в будущем конкуренция за ресурсы для развития будет предельно <em>жесткой</em>.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43740638,
        englishWord: "consequence",
        englishExample:
          "Cardiomyopathy is a typical <em>consequence</em> of 10 years of alcohol abuse.",
        russianWord: "последствие",
        russianExample:
          "Кардиомиопатия - типичное <em>последствие</em>, которое формируется на протяжении 10 лет злоупотребления спиртными напитками.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43740603,
        englishWord: "dismiss",
        englishExample:
          "We can't <em>dismiss</em> her story for not fitting a known pattern.",
        russianWord: "отвергнуть",
        russianExample:
          "Мы не можем <em>отвергнуть</em> ее версию только потому, что она не соответствует известному шаблону.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43740572,
        englishWord: "dismiss",
        englishExample:
          "He can <em>dismiss</em> individual ministers or the entire cabinet.",
        russianWord: "уволить",
        russianExample:
          "Он мог <em>уволить</em> в отставку как отдельных министров, так и все правительство в целом.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43740548,
        englishWord: "surgery",
        englishExample:
          "Doctors misdiagnosed it and performed unnecessary <em>surgery</em>.",
        russianWord: "операцию",
        russianExample:
          "Больной неправильно поставили диагноз и сделали <em>операцию</em>, в которой не было необходимости.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43740425,
        englishWord: "binge watching",
        englishExample:
          "The whole attention span myth seems especially weird during an era of <em>binge watching</em> streamed TV and videogames that straight up never end.",
        russianWord: "беспробудного просмотра",
        russianExample:
          "Весь миф о концентрации внимания кажется особенно странным в эпоху <em>беспробудного просмотра</em> потокового телевидения и видеоигр, которые никогда не кончаются.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43740378,
        englishWord: "binge",
        englishExample:
          "Symptoms of alcoholic hepatitis appear in patients usually after prolonged <em>binge</em>.",
        russianWord: "запой",
        russianExample:
          "Симптомы алкогольных гепатитов появляются у больных обычно после продолжительного <em>запоя</em>.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43740334,
        englishWord: "root for",
        englishExample:
          "Some people say that it is human nature to <em>root for</em> the underdog.",
        russianWord: "болеть за",
        russianExample:
          "Иногда говорят, что человеку свойственно <em>болеть за</em> более слабого соперника.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43740297,
        englishWord: "blossom",
        englishExample: "Only then the flower will grow and <em>blossom</em>.",
        russianWord: "цвести",
        russianExample:
          "Только в этом случае цветок будет пышно расти и <em>цвести</em>.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43740255,
        englishWord: "dorm",
        englishExample: "I thought you were going back to the <em>dorm</em>.",
        russianWord: "общежитие",
        russianExample: "Я думала, ты вернешься в <em>общежитие</em>.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43740242,
        englishWord: "sting",
        englishExample: "Unlike the bee it can <em>sting</em> numerous times.",
        russianWord: "жалить",
        russianExample:
          'Но, в отличие от пчел, <em class="both">жалить</em> он может несколько раз.',
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43740194,
        englishWord: "spare",
        englishExample: "I thought I had a <em>spare</em> packet.",
        russianWord: "запасной",
        russianExample: "Я думала, что у меня есть <em>запасной</em> пакет.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43618117,
        englishWord: "tear",
        englishExample:
          "But secrets revealed will threaten to <em>tear</em> you apart.",
        russianWord: "разорвать",
        russianExample:
          "Но секреты, которые будут раскрыты, грозят <em>разорвать</em> тебя на части.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43617790,
        englishWord: "pole vault",
        englishExample:
          "With his victory in 1912, Harry Babcock gave US its fifth consecutive <em>pole vault</em> win.",
        russianWord: "прыжках с шестом",
        russianExample:
          "С его победой в 1912 году Гарри Бэбкок дал США свою пятую подряд победу в <em>прыжках с шестом</em>.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43617749,
        englishWord: "cobbler",
        englishExample: "I know what a <em>cobbler</em> is.",
        russianWord: "сапожник",
        russianExample: "Знаю я, кто такой <em>сапожник</em>.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43617722,
        englishWord: "scholarship",
        englishExample: "It says my <em>scholarship</em> was canceled.",
        russianWord: "стипендия",
        russianExample:
          "Здесь говорится, что моя <em>стипендия</em> была отменена.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43617703,
        englishWord: "crappy",
        englishExample:
          "That movie was so <em>crappy</em> that it was refreshing.",
        russianWord: "дерьмовый",
        russianExample:
          "Фильм был такой <em>дерьмовый</em>, что я аж взбодрилась.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43617695,
        englishWord: "cater",
        englishExample: "I just told my mom I'd <em>cater</em> her party.",
        russianWord: "обслуживать",
        russianExample:
          "Я только что сказала маме, что буду <em>обслуживать</em> её вечеринку.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43617674,
        englishWord: "dude",
        englishExample: "Nobody dries me like you do, <em>dude</em>.",
        russianWord: "чувак",
        russianExample: "Никто не вытирает меня так, как ты, <em>чувак</em>.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43617636,
        englishWord: "capable",
        englishExample:
          "I cared that she is a <em>capable</em> commanding officer.",
        russianWord: "способный",
        russianExample:
          "И я еще тогда заметил, что это очень <em>способный</em> офицер.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43617634,
        englishWord: "capable",
        englishExample:
          "In her <em>capable</em> hands it becomes extraordinary.",
        russianWord: "умелых",
        russianExample:
          "А уж в <em>умелых</em> руках она превращается в нечто особенное.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43617507,
        englishWord: "aim",
        englishExample:
          "Their primary <em>aim</em> is minimising your tax liability.",
        russianWord: "цель",
        russianExample:
          "Так, как его главная <em>цель</em> - минимизировать налоговое обязательство.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43617501,
        englishWord: "bounce",
        englishExample: "I think you should fly, not <em>bounce</em>.",
        russianWord: "подпрыгивать",
        russianExample:
          "Я думаю, тебе нудно парить, а не <em>подпрыгивать</em>.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43617498,
        englishWord: "bounce",
        englishExample:
          "And criticism and negative words will <em>bounce</em> off of you more easily and often.",
        russianWord: "отскакивать",
        russianExample:
          "А критика и негативные слова будут <em>отскакивать</em> от вас все легче и чаще.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43617496,
        englishWord: "bounce up",
        englishExample:
          "In the meantime, it'll <em>bounce up</em> and down as the whales go into and out of tokens.",
        russianWord: "подпрыгивать вверх",
        russianExample:
          "Между тем, он будет <em>подпрыгивать вверх</em> и вниз, когда киты будут входить и выходить из токенов.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43617439,
        englishWord: "pace",
        englishExample:
          "Dividends will likely grow at a similar <em>pace</em>.",
        russianWord: "темпе",
        russianExample:
          "Рост дивидендов, вероятно, последует в том же <em>темпе</em>.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43617416,
        englishWord: "cyclist",
        englishExample:
          "When driving on a smooth road <em>cyclist</em> easily holds the wheel 6 (with one hand).",
        russianWord: "велосипедист",
        russianExample:
          "При движении по гладкой дороге <em>велосипедист</em> легко придерживает руль 6 (можно одной рукой).",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43617395,
        englishWord: "competitor",
        englishExample:
          "You're my ultimate teammate and my toughest <em>competitor</em>.",
        russianWord: "конкурент",
        russianExample:
          "Ты - мой лучший товарищ по команде и самый жесткий <em>конкурент</em>.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43617341,
        englishWord: "races",
        englishExample:
          "Moreover he wants to win <em>races</em> in the conditions he likes.",
        russianWord: "гонки",
        russianExample:
          "Более того - он хочет выигрывать <em>гонки</em> в тех условиях, которые ему нравятся.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43617335,
        englishWord: "outcome",
        englishExample: "The <em>outcome</em> of the battle could change.",
        russianWord: "исход",
        russianExample:
          "Это значит, что <em>исход</em> любого боя может измениться.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43617332,
        englishWord: "outcome",
        englishExample: "Choose an <em>outcome</em> where everyone wins.",
        russianWord: "результат",
        russianExample:
          "Нужно стараться выбирать такой <em>результат</em>, в котором каждый оказывается в выигрыше.",
        association: "",
        groupId: 1677062871151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44020056,
        englishWord: "succeed",
        englishExample:
          "They failed because we did not let them <em>succeed</em>.",
        russianWord: "преуспеть",
        russianExample:
          "До нас не преуспели, потому что не должны были <em>преуспеть</em>.",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44020045,
        englishWord: "sibling",
        englishExample:
          "You have a <em>sibling</em>, which you've never mentioned.",
        russianWord: "брат",
        russianExample:
          "У тебя есть родной <em>брат</em>, о котором ты никогда не упоминала.",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44020043,
        englishWord: "step-mother",
        englishExample: "But I realized today, I'm your <em>step-mother</em>.",
        russianWord: "мачеха",
        russianExample: "Но сегодня я поняла, что я твоя <em>мачеха</em>.",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44020025,
        englishWord: "nephew",
        englishExample:
          "She discovers that my <em>nephew</em> committed suicide.",
        russianWord: "племянник",
        russianExample:
          "И тогда она сообщила мне, что ее <em>племянник</em> совершил самоубийство.",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44019997,
        englishWord: "cramped",
        englishExample:
          "The salon is very <em>cramped</em> and squalid in comparison with the Tupolev.",
        russianWord: "тесный",
        russianExample:
          "Салон очень <em>тесный</em> и убогий по сравнению с Туполевым.",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44019955,
        englishWord: "offence",
        englishExample: "No-one was charged with this <em>offence</em>.",
        russianWord: "правонарушение",
        russianExample:
          "Никто не был привлечен к ответственности за это <em>правонарушение</em>.",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44019854,
        englishWord: "compare",
        englishExample:
          "Shop several tourist agencies to <em>compare</em> price.",
        russianWord: "сравнить",
        russianExample:
          "Лучше посетить несколько туристических агентств, для того чтобы можно было <em>сравнить</em> цены.",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44019847,
        englishWord: "comparison",
        englishExample:
          "Most interesting is the <em>comparison</em> among species.",
        russianWord: "сравнение",
        russianExample:
          "Выставка в первую очередь - это <em>сравнение</em> разных пород.",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44019698,
        englishWord: "messy",
        englishExample:
          "The takeover and a <em>messy</em> Russian response left 100 dead.",
        russianWord: "беспорядочных",
        russianExample:
          "В результате налета и <em>беспорядочных</em> ответных мер российской стороны погибло 100 человек.",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44019696,
        englishWord: "messy",
        englishExample:
          "Building products is a creative and sometimes <em>messy</em> process.",
        russianWord: "грязный",
        russianExample:
          "Строительные изделия - это творческий, а иногда и <em>грязный</em> процесс.",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44019667,
        englishWord: "bright",
        englishExample:
          "This is a <em>bright</em> young man who's put his life back on track.",
        russianWord: "умный",
        russianExample:
          'Это <em class="both">умный</em> молодой человек который восстановил свою жизнь.',
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44019653,
        englishWord: "patient",
        englishExample: "He was <em>patient</em>, and worked with me.",
        russianWord: "терпеливый",
        russianExample:
          'Но он был <em class="both">терпеливый</em>, очень много со мной работал.',
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44019634,
        englishWord: "strict",
        englishExample:
          "Also he is against any animal products, despite their <em>strict</em> regulations.",
        russianWord: "строгие",
        russianExample:
          "Так же он против любых продуктов животного происхождения, не смотря на их <em>строгие</em> предписания.",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44019620,
        englishWord: "determined",
        englishExample:
          "This woman attracts men desperate and <em>determined</em>, like her.",
        russianWord: "решительных",
        russianExample:
          "Эта женщина привлекает к себе мужчин отчаянных и <em>решительных</em>, как она.",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44019466,
        englishWord: "niece",
        englishExample:
          "I'm thinking my <em>niece</em> was unconscious already.",
        russianWord: "племянница",
        russianExample:
          "Я думаю, что моя <em>племянница</em> была уже без сознания.",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44019449,
        englishWord: "gran",
        englishExample:
          "She wasn't much older than me and she smelled like my <em>gran</em>.",
        russianWord: "бабушка",
        russianExample:
          "Она была не намного старше меня и пахла, как моя <em>бабушка</em>.",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44019401,
        englishWord: "aunt",
        englishExample: "His <em>aunt</em> again adds to everything.",
        russianWord: "тетя",
        russianExample:
          "Но <em>тетя</em> опять продолжает вмешиваться во все ее дела.",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44018868,
        englishWord: "get on",
        englishExample:
          "We don't have to <em>get on</em>, we have to work together.",
        russianWord: "ладить",
        russianExample:
          'Нам не нужно <em class="both">ладить</em>, нам нужно работать вместе.',
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44018803,
        englishWord: "get divorced",
        englishExample: "Every year 1.2 million couples <em>get divorced</em>.",
        russianWord: "разводятся",
        russianExample:
          "Кроме того, ежегодно около 1,2 миллиона супружеских пар <em>разводятся</em>.",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44018744,
        englishWord: "work closely",
        englishExample:
          "Both governments will continue to <em>work closely</em> to facilitate the flow of goods and services.",
        russianWord: "тесно сотрудничать",
        russianExample:
          "Оба правительства продолжат <em>тесно сотрудничать</em> в облегчении потока товаров и услуг.",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44018719,
        englishWord: "got to know",
        englishExample:
          "I recently <em>got to know</em> that the end user does not use our system.",
        russianWord: "узнал",
        russianExample:
          "Недавно <em>узнал</em>, что конечный пользователь нашу систему не использует.",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44018718,
        englishWord: "got to know",
        englishExample:
          "Network marketing is something I <em>got to know</em> about very late in my life.",
        russianWord: "узнал",
        russianExample:
          "Нетворк маркетинг - это то, о чем я <em>узнал</em> очень поздно в своей жизни.",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44017549,
        englishWord: "in front of",
        englishExample: "Sometime probably <em>in front of</em> his wife.",
        russianWord: "перед",
        russianExample: "И, может быть, еще <em>перед</em> своей семьей .",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44016877,
        englishWord: "treat",
        englishExample:
          "Teachers will no longer <em>treat</em> you like children.",
        russianWord: "относиться к",
        russianExample:
          "Но, в конце концов, преподаватели уже перестанут <em>относиться к</em> вам как к студенту.",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44016270,
        englishWord: "keep in touch",
        englishExample:
          "Consider how you'll <em>keep in touch</em> while abroad.",
        russianWord: "поддерживать связь",
        russianExample:
          "Заранее подумайте о том, как вы будете <em>поддерживать связь</em> за рубежом.",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44016192,
        englishWord: "overseas",
        englishExample: "I regularly read <em>overseas</em> news items.",
        russianWord: "иностранные",
        russianExample:
          "Я регулярно читал ему вслух <em>иностранные</em> новости из газеты «Таймс».",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44016191,
        englishWord: "overseas",
        englishExample:
          "Early voting began Saturday in France's <em>overseas</em> territories.",
        russianWord: "заморских",
        russianExample:
          "Голосование в первом туре выборов в парламент Франции началось в субботу в <em>заморских</em> территориях и департаментах страны.",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44016187,
        englishWord: "overseas",
        englishExample:
          "The report suggested that 116,000 jobs were created or safeguarded by <em>overseas</em> investment last year.",
        russianWord: "зарубежных",
        russianExample:
          "В докладе говорится, что 116000 рабочих мест были созданы или защищены от <em>зарубежных</em> инвестиций в прошлом году.",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44016153,
        englishWord: "look after",
        englishExample:
          "Your father said you should let me <em>look after</em> you.",
        russianWord: "присмотреть за",
        russianExample:
          "Твой отец сказал, что ты должен позволить мне <em>присмотреть за</em> тобой.",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44016151,
        englishWord: "look after",
        englishExample: "We will <em>look after</em> you, help you.",
        russianWord: "заботиться о",
        russianExample:
          "Мы и впредь будем <em>заботиться о</em> вас, помогать вам.",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44016013,
        englishWord: "apart",
        englishExample: "Everything you touch just falls <em>apart</em>.",
        russianWord: "на части",
        russianExample:
          "Все, к чему ты прикасаешься просто разваливается <em>на части</em>.",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44016003,
        englishWord: "apart",
        englishExample: "These towns are one hundred miles <em>apart</em>.",
        russianWord: "друг от друга",
        russianExample:
          "В этих регионах населенные пункты находятся в сотнях километров <em>друг от друга</em>».",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44015936,
        englishWord: "carefree",
        englishExample:
          "They will lose their <em>carefree</em> lifestyle, and having a baby is a lifetime commitment.",
        russianWord: "беззаботный",
        russianExample:
          "Они потеряют свой <em>беззаботный</em> образ жизни, а рождение ребенка - это пожизненное обязательство.",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44015556,
        englishWord: "taught",
        englishExample: "He <em>taught</em> me what happiness is.",
        russianWord: "научил",
        russianExample:
          "Он меня <em>научил</em> тому, что есть человеческое счастье».",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44015367,
        englishWord: "sink",
        englishExample:
          "Translated from French rococo means shell or decorative <em>sink</em>.",
        russianWord: "раковина",
        russianExample:
          "В переводе с французского языка рококо означает ракушка или декоративная <em>раковина</em>.",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44015220,
        englishWord: "whereabouts",
        englishExample:
          "Although he was allegedly seen in detention, his <em>whereabouts</em> remain unknown.",
        russianWord: "местонахождение",
        russianExample:
          "Хотя это лицо, по сообщению, видели в заключении, его <em>местонахождение</em> остается неизвестным.",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43861143,
        englishWord: "suppose",
        englishExample: "I can only <em>suppose</em> you are over-tired.",
        russianWord: "предположить",
        russianExample:
          "Я могу лишь <em>предположить</em>, что вы слишком переутомились.",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43861046,
        englishWord: "retire",
        englishExample:
          "But as the baby-boomers <em>retire</em> the bonus turns into a penalty.",
        russianWord: "выходить на пенсию",
        russianExample:
          "Но, когда бэби-бумеры начинают <em>выходить на пенсию</em>, бонус превращается в штраф.",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43859906,
        englishWord: "occasionally",
        englishExample:
          "The disorder is typically not serious but <em>occasionally</em> can be.",
        russianWord: "иногда",
        russianExample:
          "Беспорядок, как правило, не серьезен, но <em>иногда</em> может быть.",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43859741,
        englishWord: "vague",
        englishExample:
          "A somewhat <em>vague</em> term, no definitive scientific definition.",
        russianWord: "расплывчатый",
        russianExample:
          "Это достаточно <em>расплывчатый</em> термин, у него нет четкого научного определения.",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43842332,
        englishWord: "further",
        englishExample:
          "There is nevertheless considerable scope for <em>further</em> simplification.",
        russianWord: "дальнейшего",
        russianExample:
          "Однако, несмотря на эти усилия, имеются существенные возможности для <em>дальнейшего</em> упрощения этого процесса.",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43842325,
        englishWord: "further",
        englishExample:
          "Several projects already launched deserved <em>further</em> attention.",
        russianWord: "дополнительного",
        russianExample:
          "Несколько проектов, реализация которых уже началась, требуют к себе <em>дополнительного</em> внимания.",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40906301,
        englishWord: "coast",
        englishExample:
          "The Atlantic <em>coast</em> of North America rapidly cooled, but the Pacific <em>coast</em> remained warmer than at present.",
        russianWord: "побережье",
        russianExample:
          "Атлантическое <em>побережье</em> Северной Америки быстро охлаждалось, но тихоокеанское <em>побережье</em> оставалось более теплым, чем в настоящее время.",
        association: "",
        groupId: 1677750894688,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44175315,
        englishWord: "kooky",
        englishExample: "This may sound a bit <em>kooky</em> to you.",
        russianWord: "бредово",
        russianExample: "Для вас может звучать несколько <em>бредово</em>.",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44175311,
        englishWord: "kooky",
        englishExample:
          "To-to prove your point, you're suggesting something <em>kooky</em>.",
        russianWord: "чудное",
        russianExample:
          "Чтобы доказать свою точку зрения, ты предлагаешь нечто <em>чудное</em>.",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44175263,
        englishWord: "engage with",
        englishExample:
          "Line managers <em>engage with</em> their staff, communicating business goals and priorities.",
        russianWord: "взаимодействовать с",
        russianExample:
          "Руководители среднего звена <em>взаимодействуют с</em> персоналом, доводя до его сведения информацию о приоритетах и направлениях хозяйственной деятельности.",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44175239,
        englishWord: "engage with",
        englishExample:
          "He also saw the need to prioritize Central Asia and better <em>engage with</em> the neighbors.",
        russianWord: "взаимодействовать с",
        russianExample:
          "Он также увидел необходимость уделять приоритетное внимание Центральной Азии и лучше <em>взаимодействовать с</em> соседями.",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44174453,
        englishWord: "would you mind",
        englishExample: "Sergeant, <em>would you mind</em> taking a photo?",
        russianWord: "вы не против",
        russianExample:
          "Сержант, <em>вы не против</em> сфотографироваться со мной?",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44174449,
        englishWord: "would you mind",
        englishExample: "Look, <em>would you mind</em> overseeing it, Bruce?",
        russianWord: "ты не против",
        russianExample: "Брюс, <em>ты не против</em> присмотреть за этим?",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44174282,
        englishWord: "remorse",
        englishExample: "He never felt <em>remorse</em> about that.",
        russianWord: "угрызения совести",
        russianExample:
          "Он никогда не испытывал <em>угрызения совести</em> по этому поводу.",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44174055,
        englishWord: "vindicated",
        englishExample: "He expects to be fully <em>vindicated</em>.",
        russianWord: "оправдан",
        russianExample: "И ожидает, что будет полностью <em>оправдан</em>».",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44173893,
        englishWord: "surrender",
        englishExample: "All you have to do is <em>surrender</em>.",
        russianWord: "сдаться",
        russianExample: "Все, что тебе нужно сделать - это <em>сдаться</em>.",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44173840,
        englishWord: "figure",
        englishExample: "I <em>figure</em> it's lost property.",
        russianWord: "считать",
        russianExample:
          'Будем <em class="both">считать</em>, что это утерянное имущество.',
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44173762,
        englishWord: "casket",
        englishExample:
          "The body should be displayed in a simple, inexpensive <em>casket</em>.",
        russianWord: "гроб",
        russianExample:
          'Тело должно быть помещено в простой, недорогой <em class="both">гроб</em>.',
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44173754,
        englishWord: "casket",
        englishExample:
          "This place is a real <em>casket</em> of true oriental culture.",
        russianWord: "шкатулка",
        russianExample:
          "Это место - настоящая <em>шкатулка</em> истинной восточной культуры.",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44173614,
        englishWord: "godmother",
        englishExample:
          "I haven't been a very conscientious <em>godmother</em>, I know.",
        russianWord: "крестная",
        russianExample:
          "Я не была очень внимательной <em>крестной матерью</em>, я знаю.",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44173457,
        englishWord: "favor",
        englishExample:
          "Real names had been abandoned in <em>favor</em> of pseudonyms.",
        russianWord: "польза",
        russianExample:
          "Вот тогда ему и пришлось отказаться от настоящего имени в <em>пользу</em> псевдонима.",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44173439,
        englishWord: "favor",
        englishExample: "Okay, do me a <em>favor</em>.",
        russianWord: "одолжение",
        russianExample: "Конечно нет. Ок, сделай мне <em>одолжение</em>.",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44175321,
        englishWord: "kooky",
        englishExample: "A little <em>kooky</em>, but I love her.",
        russianWord: "не в себе",
        russianExample: "Она немного не в <em>себе</em>, но я её обожаю.",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44175283,
        englishWord: "engage",
        englishExample:
          "We believe the difference is in how they <em>engage</em> our attention.",
        russianWord: "привлекают",
        russianExample:
          'Мы считаем, что разница заключается в том, как они <em class="both">привлекают</em> наше внимание.',
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44175251,
        englishWord: "engage with",
        englishExample:
          "More importantly, you can <em>engage with</em> people.",
        russianWord: "общаться с",
        russianExample:
          "И, что самое важное, вы сможете <em>общаться с</em> людьми.",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44172956,
        englishWord: "deed",
        englishExample:
          "Whatever cretinous <em>deed</em> you did it's just ruined our summer.",
        russianWord: "поступок",
        russianExample:
          "Какой бы дурацкий <em>поступок</em> ты не совершил, он только что разрушил наше лето.",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44172853,
        englishWord: "give a run for their money",
        englishExample: "",
        russianWord: "составлять серьезную конкуренцию",
        russianExample: "",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44172737,
        englishWord: "desperately",
        englishExample:
          "The cheap and affordable energy is what humanity <em>desperately</em> craves.",
        russianWord: "отчаянно",
        russianExample:
          "Дешевая и доступная энергия - это то, чего так <em>отчаянно</em> жаждет человечество.",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44174431,
        englishWord: "would you mind",
        englishExample: "And <em>would you mind</em> staying and being my son?",
        russianWord: "ты не против",
        russianExample: "<em>Ты не против</em> остаться и стать моим сыном?",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44172393,
        englishWord: "smother",
        englishExample:
          "When it is done, we must <em>smother</em> fire and move quickly.",
        russianWord: "потушить",
        russianExample:
          "Когда все будет сделано, мы должны <em>потушить</em> огонь и двигаться быстро.",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44174324,
        englishWord: "procreate",
        englishExample:
          "Anybody can be a parent as long as you can <em>procreate</em>.",
        russianWord: "размножаться",
        russianExample:
          "Кто угодно может быть родителем, пока способен <em>размножаться</em>.",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44172305,
        englishWord: "perpetuate",
        englishExample:
          "All a person wants is to <em>perpetuate</em> their genes.",
        russianWord: "увековечить",
        russianExample:
          "Но есть и другая причина - мужчины хотят <em>увековечить</em> свои гены.",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44174264,
        englishWord: "assault",
        englishExample:
          "However, the woman had actually hired two teenagers to <em>assault</em> her son.",
        russianWord: "напасть",
        russianExample:
          'Однако фактически женщина наняла двух подростков, чтобы <em class="both">напасть</em> на сына.',
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44174257,
        englishWord: "assault",
        englishExample:
          "It doesn't mean that she solicited her own <em>assault</em>.",
        russianWord: "нападение",
        russianExample:
          "Но это не означает, что она подстрекала его на собственное <em>нападение</em>.",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44172223,
        englishWord: "outcast",
        englishExample:
          "Society does not accept people like him, he is an <em>outcast</em> .",
        russianWord: "изгой",
        russianExample:
          "Общество не принимает таких, как он, он - <em>изгой</em> .",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44173827,
        englishWord: "figured",
        englishExample: "I <em>figured</em> it was probably someone I knew.",
        russianWord: "подумал",
        russianExample:
          "Затем я <em>подумал</em>, что, может быть, это кто-то, кого я знал.",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44173712,
        englishWord: "seek",
        englishExample:
          "To <em>seek</em> to grow in life you must <em>seek</em> the truth in everything.",
        russianWord: "искать",
        russianExample:
          "Чтобы <em>стремиться</em> возрасти в жизни, вы должны <em>искать</em> истину во всем.",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44173667,
        englishWord: "swindle",
        englishExample: "So it's basically just a giant tax <em>swindle</em>.",
        russianWord: "мошенничество",
        russianExample:
          "Так что это по сути просто гигантское налоговое <em>мошенничество</em>.",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44173618,
        englishWord: "godmother",
        englishExample:
          "She asked me to be <em>godmother</em> to this little love, but I declined.",
        russianWord: "крестная",
        russianExample:
          "Она предлагала мне стать <em>крёстной матерью</em> этой чудесной крошки, но я отказалась.",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44173605,
        englishWord: "funeral",
        englishExample:
          "Childbirth benefit and <em>funeral</em> benefit are one-time payments.",
        russianWord: "погребение",
        russianExample:
          "Пособие при рождении ребенка и пособие на <em>погребение</em> представляют собой единовременные выплаты.",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44173512,
        englishWord: "guess",
        englishExample: "Well, <em>guess</em> they have to eat too.",
        russianWord: "полагать",
        russianExample: 'Надо <em class="both">полагать</em>, съедят и их.',
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44173445,
        englishWord: "favor",
        englishExample:
          "You want another <em>favor</em>, I want more time off.",
        russianWord: "услуга",
        russianExample:
          "Тебе нужна еще одна <em>услуга</em>, а мне нужно больше времени на воле.",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44172726,
        englishWord: "desperately needed",
        englishExample:
          "And yet nobody was able to give him any support when he <em>desperately needed</em> it.",
        russianWord: "отчаянно нуждался",
        russianExample:
          "Но никто не смог поддержать его, когда он <em>отчаянно нуждался</em> в поддержке.",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44172389,
        englishWord: "smother",
        englishExample:
          "I could <em>smother</em> somebody in their sleep with this thing.",
        russianWord: "придушить",
        russianExample: "Я могу кого-нибудь <em>придушить</em> этой штукой.",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44172371,
        englishWord: "smothering",
        englishExample:
          "So, <em>smothering</em> is either his M.O. or his ritual.",
        russianWord: "удушение",
        russianExample:
          "Значит, <em>удушение</em> - его характерный почерк или часть ритуала.",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44172352,
        englishWord: "claw",
        englishExample:
          "The lion's <em>claw</em> was found under the head of a buried man.",
        russianWord: "коготь",
        russianExample:
          "Под головой похороненного человека найден <em>коготь</em> льва.",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44172294,
        englishWord: "perpetuating",
        englishExample:
          "It had been asked whether <em>perpetuating</em> polygamy was consistent with respect for human rights.",
        russianWord: "увековечение",
        russianExample:
          "Возникал вопрос в отношении того, согласуется ли <em>увековечение</em> полигамии с уважением прав человека.",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44170904,
        englishWord: "clear up",
        englishExample:
          "The USB standard these days is a little hard to understand, and computer manufacturers aren't helping <em>clear up</em> the confusion.",
        russianWord: "устранить",
        russianExample:
          "Стандарт USB в наши дни немного трудно понять, и производители компьютеров не помогают <em>устранить</em> путаницу.",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44170896,
        englishWord: "clear up",
        englishExample:
          "If so, it may be best to talk and <em>clear up</em> any suspicions.",
        russianWord: "прояснить",
        russianExample:
          "Если так, то может быть лучше поговорить и <em>прояснить</em> любые подозрения.",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44170815,
        englishWord: "nefarious",
        englishExample:
          "More importantly, I have more than a strong suspicion where our <em>nefarious</em> foe may be heading.",
        russianWord: "гнусный",
        russianExample:
          "Но важнее, что у меня есть сильно подозрение, куда наш <em>гнусный</em> враг может направляться.",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40820703,
        englishWord: "guess",
        englishExample: "I bet you can <em>guess</em> where it'll land.",
        russianWord: "угадать",
        russianExample:
          "Теперь дело за тобой, чтобы <em>угадать</em>, где он приземлится.",
        association: "",
        groupId: 1678203590343,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44344923,
        englishWord: "particular",
        englishExample:
          "And then it becomes a collective ego of a <em>particular</em> community, of a <em>particular</em> country, of a <em>particular</em> ideology.",
        russianWord: "определённого",
        russianExample:
          "И затем это становится коллективным эго <em>определённого</em> сообщества, <em>определённой</em> страны, <em>определённой</em> идеологии.",
        association: "",
        groupId: 1678376763770,
        done: true,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44344907,
        englishWord: "particular",
        englishExample:
          "So a <em>particular</em> component, a <em>particular</em> controller needs a <em>particular</em> set of services to get its job done.",
        russianWord: "конкретный",
        russianExample:
          "Так что <em>конкретный</em> компонент, <em>конкретного</em> контроллер должен <em>определенный</em> набор услуг, чтобы получить его работу.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture:
          "https://www.shutterstock.com/shutterstock/photos/311756186/display_1500/stock-vector-a-crowd-of-people-with-a-particular-person-in-tsernte-that-special-red-311756186.jpg",
      },
      {
        id: 44344904,
        englishWord: "particular",
        englishExample:
          "Unfortunately we can't recommend any <em>particular</em> company.",
        russianWord: "конкретную",
        russianExample:
          "Конечно, мы не можем сказать, чтобы они не устраивались в <em>конкретную</em> фирму.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture:
          "https://www.shutterstock.com/shutterstock/photos/311756186/display_1500/stock-vector-a-crowd-of-people-with-a-particular-person-in-tsernte-that-special-red-311756186.jpg",
      },
      {
        id: 44344889,
        englishWord: "particularly",
        englishExample:
          "Women and children are <em>particularly</em> vulnerable to human trafficking.",
        russianWord: "Особенно",
        russianExample:
          "<em>Особенно</em> уязвимыми в отношении практики торговли людьми являются женщины и дети.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture:
          "https://www.powerthesaurus.org/_images/terms/particularly-synonyms-2.png",
      },
      {
        id: 44344865,
        englishWord: "particularly",
        englishExample:
          "This made it <em>particularly</em> attractive in undeveloped countries.",
        russianWord: "особенно",
        russianExample:
          "Это делает его <em>особенно</em> привлекательным в местах произрастания с неблагоприятной экологией.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture:
          "https://www.powerthesaurus.org/_images/terms/particularly-synonyms-2.png",
      },
      {
        id: 44344784,
        englishWord: "went off",
        englishExample:
          "The following day, April 20, there was another outbreak of land seizures, but this time the action <em>went off</em> peacefully.",
        russianWord: "прошло",
        russianExample:
          'На следующий день, 20 апреля произошла еще одна вспышка самозахватов к югу от столицы, но на этот раз все <em class="both">прошло</em> мирно.',
        association: "",
        groupId: 1678376763770,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44344667,
        englishWord: "plumbing",
        englishExample: "Then they put <em>plumbing</em> in the house.",
        russianWord: "водопровод",
        russianExample:
          "Потом они провели <em>водопровод</em> в дом, а это место забросили.",
        association: "ПЛАМЕННый водопровод",
        groupId: 1678376763770,
        done: false,
        picture:
          "https://media.architecturaldigest.com/photos/62a788821c1c252c9ea60ad4/master/pass/plumbing%20tips.jpg",
      },
      {
        id: 44344663,
        englishWord: "plumbing",
        englishExample:
          "I don't know anything about regulators or <em>plumbing</em>.",
        russianWord: "сантехнике",
        russianExample:
          "Я ничего не понимаю ни в клапанах, ни в <em>сантехнике</em>.",
        association: "ПЛАМЕННая сантехника",
        groupId: 1678376763770,
        done: false,
        picture:
          "https://explorethetrades.org/wp-content/uploads/2020/06/plumbing-equipment-1000x667-1.jpg",
      },
      {
        id: 44344634,
        englishWord: "plumber",
        englishExample:
          "Truck driver or night watchman, <em>plumber</em>, maybe even electrician.",
        russianWord: "сантехник",
        russianExample:
          "Водитель грузовика, ночной сторож, <em>сантехник</em>, может быть, даже электрик.",
        association: "сантехник потушил ПЛАМЯ",
        groupId: 1678376763770,
        done: false,
        picture:
          "https://www.neit.edu/wp-content/uploads/2022/11/Plumber-Water-Pipe-Leak-Repair.jpg",
      },
      {
        id: 44344335,
        englishWord: "application",
        englishExample:
          "A second <em>application</em> area in computer vision is in industry.",
        russianWord: "прикладной",
        russianExample:
          'Другой <em class="both">прикладной</em> областью компьютерного зрения является промышленность.',
        association: "",
        groupId: 1678376763770,
        done: false,
        picture:
          "https://www.researchgate.net/publication/359936353/figure/fig1/AS:1145127242338333@1650031018224/Application-of-machine-learning-in-daily-life.jpg",
      },
      {
        id: 44344317,
        englishWord: "application",
        englishExample:
          "Both oral medicines and <em>application</em> of creams are appropriate.",
        russianWord: "применение",
        russianExample:
          'Оральные лекарственные препараты и <em class="both">применение</em> местных кремов являются подходящими методами лечения.',
        association: "",
        groupId: 1678376763770,
        done: false,
        picture:
          "https://s30876.pcdn.co/wp-content/uploads/Top-Tips-for-Job-Application-Forms-1170x630.jpg.optimal.jpg",
      },
      {
        id: 44344294,
        englishWord: "application",
        englishExample:
          "This priority <em>application</em> is hereby incorporated by reference in its entirety into the present <em>application</em> to the extent consistent with the present <em>application</em>.",
        russianWord: "заявки",
        russianExample:
          "Эти приоритетные <em>заявки</em>, таким образом, включены по ссылке во всей своей полноте в настоящую <em>заявку</em> до степени, согласующейся с настоящей <em>заявкой</em>.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture:
          "https://media.istockphoto.com/id/1071903718/vector/application-form-and-pen-claim-form-paperwork-concepts-flat-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=hgAduxe75KiB0VFdHMqNLtRJjh1JzT2n900zl_6zfmo=",
      },
      {
        id: 44344254,
        englishWord: "resign",
        englishExample:
          "Tenyukh said that in that case he had better <em>resign</em>.",
        russianWord: "уйти в отставку",
        russianExample:
          "Тенюх отметил, что в таком случае ему лучше <em>уйти в отставку</em>.",
        association: "РЕзиновый диЗАЙН ушел в отставку",
        groupId: 1678376763770,
        done: false,
        picture:
          "https://st2.depositphotos.com/3259079/5831/v/600/depositphotos_58319533-stock-illustration-businessman-leaving-job-vector.jpg",
      },
      {
        id: 44344233,
        englishWord: "claim",
        englishExample: "I cannot <em>claim</em> full responsibility for this.",
        russianWord: "утверждать",
        russianExample:
          'Я не могу об этом со всей полнотой ответственности <em class="both">утверждать</em>.',
        association: "",
        groupId: 1678376763770,
        done: false,
        picture:
          "https://smallclaimsbc.ca/sites/default/files/inline-images/startingclaim_noticeclaimform_claimant.png",
      },
      {
        id: 44344230,
        englishWord: "claim",
        englishExample: "Nobody can <em>claim</em> anything, really.",
        russianWord: "утверждать",
        russianExample:
          'На самом деле никто ничего не может <em class="both">утверждать</em>».',
        association: "",
        groupId: 1678376763770,
        done: false,
        picture:
          "https://smallclaimsbc.ca/sites/default/files/inline-images/startingclaim_noticeclaimform_claimant.png",
      },
      {
        id: 44344196,
        englishWord: "claim",
        englishExample:
          "Accordingly, the Panel will address specific issues of evidence for each <em>claim</em> element in the <em>claim</em> analysis section.",
        russianWord: "претензии",
        russianExample:
          "Исходя из этого Группа будет решать конкретные вопросы доказанности каждого элемента <em>претензии</em> в разделе, посвященном анализу.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture:
          "data:image/jpeg;base64,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",
      },
      {
        id: 44344154,
        englishWord: "sadly",
        englishExample:
          "Archbishop John looked at her <em>sadly</em> and went upstairs.",
        russianWord: "печально",
        russianExample:
          "Архиепископ Иоанн посмотрел на нее <em>печально</em> и поднялся наверх к себе.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture:
          "https://upjourney.com/wp-content/uploads/2018/07/sad-girl-quotes.jpg",
      },
      {
        id: 44344152,
        englishWord: "sadly",
        englishExample: "But <em>sadly</em> no party can go on forever.",
        russianWord: "к сожалению",
        russianExample:
          "Но, <em>к сожалению</em>, любой праздник не может продолжаться вечно.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture:
          "https://upjourney.com/wp-content/uploads/2018/07/sad-girl-quotes.jpg",
      },
      {
        id: 44344108,
        englishWord: "widespread",
        englishExample:
          "This objective enjoys <em>widespread</em> support among the non-nuclear-weapon States.",
        russianWord: "широкую",
        russianExample:
          "Эта цель получила <em>широкую</em> поддержку среди государств, не обладающих ядерным оружием.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture:
          "https://images.squarespace-cdn.com/content/v1/551e8d99e4b0751e1a311984/1565041404875-PN8V7GKB7Y4QL09J2J5F/Europe_Composite_Adjusted_201905-202004_12mo_banner.png?format=2500w",
      },
      {
        id: 44344107,
        englishWord: "widespread",
        englishExample:
          "Nor have measurable savings or <em>widespread</em> improvements been seen yet.",
        russianWord: "широкомасштабные",
        russianExample:
          "Также пока что не видны ни измеримая экономия, ни <em>широкомасштабные</em> улучшения.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture:
          "https://images.squarespace-cdn.com/content/v1/551e8d99e4b0751e1a311984/1565041404875-PN8V7GKB7Y4QL09J2J5F/Europe_Composite_Adjusted_201905-202004_12mo_banner.png?format=2500w",
      },
      {
        id: 44344106,
        englishWord: "widespread",
        englishExample:
          "Response has included <em>widespread</em> chlorination of water sources.",
        russianWord: "повсеместное",
        russianExample:
          "В рамках принимаемых ответных мер обеспечивалось <em>повсеместное</em> хлорирование воды, получаемой из источников.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture:
          "https://images.squarespace-cdn.com/content/v1/551e8d99e4b0751e1a311984/1565041404875-PN8V7GKB7Y4QL09J2J5F/Europe_Composite_Adjusted_201905-202004_12mo_banner.png?format=2500w",
      },
      {
        id: 44344019,
        englishWord: "generally",
        englishExample:
          "Full back up <em>generally generally</em> concerns the entire system and files completely.",
        russianWord: "обычно",
        russianExample:
          "Полное резервирование <em>обычно</em> затрагивает всю систему и все файлы.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture:
          "https://www.powerthesaurus.org/_images/terms/generally-synonyms.png",
      },
      {
        id: 44344017,
        englishWord: "generally",
        englishExample: "One <em>generally</em> begins with rhyme and rhythm.",
        russianWord: "как правило",
        russianExample:
          "Для малышей, <em>как правило</em>, все начинается с ритмики и ритмических движений.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture:
          "https://www.powerthesaurus.org/_images/terms/generally-synonyms.png",
      },
      {
        id: 44343913,
        englishWord: "find out",
        englishExample: "Attend this workshop and <em>find out</em> how.",
        russianWord: "узнайте",
        russianExample:
          "Приходите на наш семинар и <em>узнайте</em>, как это сделать.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture: "https://cdn.langeek.co/photo/23641/original/",
      },
      {
        id: 44343909,
        englishWord: "find out",
        englishExample: "You guys should probably go <em>find out</em>.",
        russianWord: "выяснить",
        russianExample:
          "Вам, ребята, вероятно, нужно поехать туда и все <em>выяснить</em>.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture:
          "https://www.repricerexpress.com/wp-content/uploads/2019/07/shutterstock_13308901581.jpg",
      },
      {
        id: 44343684,
        englishWord: "get into",
        englishExample:
          "This happens to adults when they <em>get into</em> psychotherapy.",
        russianWord: "попадают в",
        russianExample:
          "Это происходит со взрослыми людьми, когда они <em>попадают в</em> психотерапию.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture:
          "https://www.springboard.com/blog/wp-content/uploads/2022/05/how-to-get-into-sales.jpeg",
      },
      {
        id: 44343676,
        englishWord: "get into",
        englishExample:
          "You might even give instructions on how to <em>get into</em> your building.",
        russianWord: "попасть в",
        russianExample:
          "Вы могли бы даже дать инструкции о том, как <em>попасть в</em> ваше здание.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture:
          "https://www.springboard.com/blog/wp-content/uploads/2022/05/how-to-get-into-sales.jpeg",
      },
      {
        id: 44343562,
        englishWord: "compulsory",
        englishExample:
          "In some countries preferences are voluntary; elsewhere they are <em>compulsory</em>.",
        russianWord: "обязательный",
        russianExample:
          "В некоторых странах льготы носят добровольный характер, а в других - <em>обязательный</em>.",
        association: "в КАМин обязательно нужны ПАЛки СОРняков",
        groupId: 1678376763770,
        done: false,
        picture:
          "https://thumbs.dreamstime.com/b/opposite-compulsory-voluntary-vector-illustration-136560888.jpg",
      },
      {
        id: 44342807,
        englishWord: "whether",
        englishExample: "Questioning <em>whether</em> our decision was right.",
        russianWord: "ли",
        russianExample:
          "Поэтому мы должны ответить на вопрос, <em>было ли</em> наше решение правильным.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44342801,
        englishWord: "whether",
        englishExample:
          "Start questioning <em>whether</em> those limits are real.",
        russianWord: "ли",
        russianExample:
          "Начните размышлять <em>о</em> своих ограничениях и о том, являются ли они реальными.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44342643,
        englishWord: "hopefully",
        englishExample:
          "And <em>hopefully</em> both teams will realize their dreams.",
        russianWord: "Надеемся",
        russianExample:
          "<em>Надеемся</em>, что ребята из обеих команд смогут осуществить свои мечты.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44342514,
        englishWord: "grade",
        englishExample:
          "The second question involves assigning the tumor a <em>grade</em>, such as <em>grade</em> 3.",
        russianWord: "степени",
        russianExample:
          "Ответ на второй вопрос связан с определением <em>степени</em> опухоли, например, З <em>степень</em>.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44342507,
        englishWord: "grade",
        englishExample:
          "Strength <em>grade</em>: The strength <em>grade</em> mainly refers to carbon steel fasteners.",
        russianWord: "Класс",
        russianExample:
          "<em>Класс</em> прочности: <em>класс</em> прочности в основном относится к крепежным деталям из углеродистой стали.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44342500,
        englishWord: "grade",
        englishExample:
          "That happened in seventh <em>grade</em> when we moved from sixth <em>grade</em> to a new school.",
        russianWord: "классе",
        russianExample:
          "Это случилось в седьмом <em>классе</em>, когда мы перешли из шестого <em>класса</em> в новую школу.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44342424,
        englishWord: "grades",
        englishExample: "Your <em>grades</em> are better than mine.",
        russianWord: "оценки",
        russianExample: "У тебя <em>оценки</em> лучше, чем у меня.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44342366,
        englishWord: "nursery",
        englishExample:
          "Living room, kitchen, <em>nursery</em> and bedroom - an ordinary, like, house.",
        russianWord: "детская",
        russianExample:
          "Гостиная, кухня, <em>детская</em> и спальня - обычный, вроде, дом.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture:
          "https://cdn.shopify.com/s/files/1/0098/5900/6545/files/jessiehuffleverett_480x480.jpg?v=1601391234",
      },
      {
        id: 44342340,
        englishWord: "nursery",
        englishExample:
          "Children should not attend school or <em>nursery</em> until they are no longer contagious.",
        russianWord: "детский сад",
        russianExample:
          "Дети не должны посещать <em>детский сад</em> или школу, пока они полностью не перестанут быть заразными.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture:
          "https://images.squarespace-cdn.com/content/v1/56c93329f2b77e5c15309475/1456031344888-P33W8LBRCIRR28USX8CZ/29.jpg",
      },
      {
        id: 44342274,
        englishWord: "finals",
        englishExample: "We have <em>finals</em> tomorrow.",
        russianWord: "выпускные экзамены",
        russianExample:
          'У нас завтра <em class="both">выпускные экзамены</em>.',
        association: "",
        groupId: 1678376763770,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44342258,
        englishWord: "finals",
        englishExample:
          "No, it's just I hate the fact that they put <em>finals</em> after the holiday.",
        russianWord: "выпускные экзамены",
        russianExample:
          'Просто мне не нравится, что они сделали <em class="both">выпускные экзамены</em> после каникул.',
        association: "",
        groupId: 1678376763770,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44342193,
        englishWord: "graduated",
        englishExample:
          "When I <em>graduated</em> from college, I got this job pumping gas out on the old road.",
        russianWord: "выпустился",
        russianExample:
          'Когда я <em class="both">выпустился</em> из колледжа, то устроился на заправке на старой дороге.',
        association: "",
        groupId: 1678376763770,
        done: false,
        picture:
          "https://www.shutterstock.com/image-photo/young-female-student-diploma-poses-260nw-1729383193.jpg",
      },
      {
        id: 44342164,
        englishWord: "graduated",
        englishExample:
          "I just <em>graduated</em> from Cornell with a business degree.",
        russianWord: "закончила",
        russianExample:
          'Я только что <em>закончила</em> Корнелльский университет по специальности "бизнес".',
        association: "",
        groupId: 1678376763770,
        done: false,
        picture:
          "https://www.shutterstock.com/image-photo/young-female-student-diploma-poses-260nw-1729383193.jpg",
      },
      {
        id: 44342102,
        englishWord: "graduated",
        englishExample:
          "She <em>graduated</em> four years ago and has since married.",
        russianWord: "окончил университет",
        russianExample:
          "Он <em>окончил университет</em> четыре года назад и еще не был женат.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture:
          "https://www.shutterstock.com/image-photo/young-female-student-diploma-poses-260nw-1729383193.jpg",
      },
      {
        id: 44342015,
        englishWord: "do a master's",
        englishExample:
          "What you're looking for are usually national funding organizations or foundations that support students coming from abroad to <em>do a master's</em> degree in that country.",
        russianWord: "получить степень магистра",
        russianExample:
          "То, что вы ищете, как правило, национальные финансирующие организации или фондов, поддерживающих студентов, приезжающих из-за рубежа <em>получить степень магистра</em> в этой стране.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture:
          "https://www.waldenu.edu/media/3971/seo-32-ir-080319_jabreu_4239-1200x675",
      },
      {
        id: 44341940,
        englishWord: "year off",
        englishExample:
          "She took a <em>year off</em> for treatment, paid for by the state.",
        russianWord: "годичный отпуск",
        russianExample:
          "Она взяла <em>годичный отпуск</em> для лечения, оплаченного государством.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44341924,
        englishWord: "stage",
        englishExample:
          "The first <em>stage</em> is working with the current financial institutions and the second <em>stage</em> is educating and promoting change.",
        russianWord: "этап",
        russianExample:
          "Первый <em>этап</em> - работа с текущими финансовыми институтами, а второй <em>этап</em> - обучение и содействие изменениям.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44341450,
        englishWord: "respond",
        englishExample:
          "When the other party does <em>respond</em>, the conversation continues.",
        russianWord: "ответить",
        russianExample:
          "И в то время как другая сторона должна <em>ответить</em>, на этом разговор также закончится.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44341448,
        englishWord: "respond",
        englishExample: "All you have to do is <em>respond</em>.",
        russianWord: "реагировать",
        russianExample: "Все, что вы должны делать - это <em>реагировать</em>.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture:
          "https://resources.workable.com/wp-content/uploads/2019/12/hiring_in_sales_avoid_these_four_candidates_2x.png",
      },
      {
        id: 44288519,
        englishWord: "expense",
        englishExample:
          "Clearly, this will require some effort and <em>expense</em>.",
        russianWord: "затрат",
        russianExample:
          "Очевидно, что это потребует от нас определенных усилий и <em>затрат</em>.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44288512,
        englishWord: "expense",
        englishExample:
          "This means no <em>expense</em> is spared, often resulting in some spectacular exhibits.",
        russianWord: "расходы",
        russianExample:
          "Это означает, что никакие <em>расходы</em> не экономятся, что часто приводит к некоторым впечатляющим выставкам.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44288511,
        englishWord: "expense",
        englishExample:
          "They want to solve their problems at our <em>expense</em>.",
        russianWord: "счет",
        russianExample:
          "Скорее, они будут пытаться решать свои проблемы за наш <em>счет</em>.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44288501,
        englishWord: "expenses",
        englishExample:
          "Contribution income and fund-raising <em>expenses</em> are separately itemized.",
        russianWord: "расходы",
        russianExample:
          "Доходы от взносов и <em>расходы</em> в связи с кампанией по сбору средств перечисляются отдельно.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44288427,
        englishWord: "tempt",
        englishExample: "Enough to <em>tempt</em> anyone I should think.",
        russianWord: "соблазнить",
        russianExample:
          "Я бы сказал, достаточно, чтобы любого <em>соблазнить</em>.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44288426,
        englishWord: "tempt",
        englishExample: "Throw out the foods that may <em>tempt</em> you.",
        russianWord: "искушать",
        russianExample:
          "Прежде всего, избавьтесь от продуктов, которые могут вас <em>искушать</em>.",
        association: "ТЕМП Тебя искушает",
        groupId: 1678376763770,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44288377,
        englishWord: "impatient",
        englishExample: "You might say I was an <em>impatient</em> inpatient.",
        russianWord: "нетерпеливый",
        russianExample:
          "И вы, возможно, ответите: я <em>нетерпеливый</em> человек.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44288364,
        englishWord: "importance",
        englishExample:
          "Yet its theoretical and practical <em>importance</em> cannot be denied.",
        russianWord: "значимости",
        russianExample:
          "Нельзя, однако, не упомянуть и практической <em>значимости</em> его теоретических и методических работ.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44288363,
        englishWord: "importance",
        englishExample:
          "Of considerable <em>importance</em> are centralized hierarchies including bureaucratic structures.",
        russianWord: "значение",
        russianExample:
          "В частности, по-прежнему сохраняют свое <em>значение</em> централизованные иерархические структуры, в том числе и бюрократического типа.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44288362,
        englishWord: "importance",
        englishExample: "It shows the <em>importance</em> of these things.",
        russianWord: "важность",
        russianExample:
          "С другой стороны, это демонстрирует <em>важность</em> таких вещей.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44288323,
        englishWord: "emphasis",
        englishExample:
          "Greater <em>emphasis</em> must be placed on a sustained and consistent drive against child abuse.",
        russianWord: "упор",
        russianExample:
          "В этой связи больший <em>упор</em> необходимо делать на постоянные и последовательные кампании борьбы против совершения надругательств над детьми.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44288317,
        englishWord: "emphasis",
        englishExample:
          "Many of us put <em>emphasis</em> on what is common between partners.",
        russianWord: "акцент",
        russianExample:
          "Многие из нас ставят <em>акцент</em> на том, что общего есть между партнерами.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44288032,
        englishWord: "come up",
        englishExample:
          "Whatever compliments you make should <em>come up</em> naturally.",
        russianWord: "возникать",
        russianExample:
          "Любые комплименты, которые вы делаете, должны <em>возникать</em> естественно.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44288029,
        englishWord: "come up",
        englishExample: "Comparisons to Vietnam may <em>come up</em>.",
        russianWord: "появится",
        russianExample: "А с Вьетнамом, может, и <em>появится</em>.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44288025,
        englishWord: "come up",
        englishExample: "But hopefully something will <em>come up</em>.",
        russianWord: "придет",
        russianExample: "«Но я буду надеяться, что что-то <em>придет</em>.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44288009,
        englishWord: "clever",
        englishExample: "It was a very <em>clever</em> dinosaur.",
        russianWord: "умный",
        russianExample:
          "Для своего времени это был очень <em>умный</em> динозавр.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44287854,
        englishWord: "desire",
        englishExample: "Recognize that you have this <em>desire</em>.",
        russianWord: "желание",
        russianExample:
          "Но имейте в виду, что у вас есть такое <em>желание</em>.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44287702,
        englishWord: "weaker",
        englishExample:
          "Several financially <em>weaker</em> members periodically threaten to bring it down.",
        russianWord: "более слабых",
        russianExample:
          "Несколько членов, <em>более слабых</em> в финансовом отношении, периодически угрожали отказаться от него.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44287699,
        englishWord: "weaker",
        englishExample:
          "I believe socialism makes people <em>weaker</em> and keeps them weak.",
        russianWord: "слабее",
        russianExample:
          "Я верю в то, что социализм делает людей <em>слабее</em> и заставляет их оставаться слабыми.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44287675,
        englishWord: "contrary",
        englishExample: "Blue has a <em>contrary</em> effect from red.",
        russianWord: "противоположный",
        russianExample:
          "Синий цвет имеет <em>противоположный</em> эффект красного.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44287627,
        englishWord: "survey",
        englishExample:
          "Interviewer effects are one example <em>survey</em> response effects.",
        russianWord: "опрос",
        russianExample:
          "Влияние особенностей интервьюера является одним из примеров эффектов, которые влияют на ответ на <em>опрос</em>.",
        association: "согласно опросу это вСЁ ВЭЙп",
        groupId: 1678376763770,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40523823,
        englishWord: "whether",
        englishExample:
          "He wondered <em>whether</em> they included procedural safeguards.",
        russianWord: "ли",
        russianExample:
          "Ему, в частности, хотелось бы знать, содержать <em>ли</em> они процессуальные гарантии.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40412884,
        englishWord: "certain",
        englishExample:
          "If you like a <em>certain</em> brand or a <em>certain</em> store or a <em>certain</em> product.",
        russianWord: "определенный",
        russianExample:
          "Если вам нравится <em>определенный</em> марка или <em>определенный</em> магазин или <em>определенный</em> продукт.",
        association: "",
        groupId: 1678376763770,
        done: false,
        picture:
          "https://www.shutterstock.com/shutterstock/photos/311756186/display_1500/stock-vector-a-crowd-of-people-with-a-particular-person-in-tsernte-that-special-red-311756186.jpg",
      },
      {
        id: 44435978,
        englishWord: "fond of",
        englishExample: "No wonder you're <em>fond</em> of them.",
        russianWord: "в восторге",
        russianExample: "Не удивительно, что ты в <em>восторге</em> от них.",
        association: "",
        groupId: 1678793305151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44435975,
        englishWord: "fond",
        englishExample:
          "We all have <em>fond</em> memory of childhood that we treasure.",
        russianWord: "дорогой сердцу, нежный",
        russianExample:
          "У каждого из нас есть <em>дорогие сердцу</em> воспоминания детства, которые мы бережно храним.",
        association: "",
        groupId: 1678793305151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44435973,
        englishWord: "fond of",
        englishExample:
          "Grandparents are usually very <em>fond</em> of their grandchildren.",
        russianWord: "любящий",
        russianExample:
          "Бабушки и дедушки, как правило, очень <em>любят</em> своих внуков.",
        association: "",
        groupId: 1678793305151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44435860,
        englishWord: "nowadays",
        englishExample:
          "Many advertising campaigns <em>nowadays</em> involve interaction.",
        russianWord: "в настоящее время",
        russianExample:
          "Проведение многих рекламных кампаний <em>в настоящее время</em> включает в себя и промоакции.",
        association: "",
        groupId: 1678793305151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44435858,
        englishWord: "nowadays",
        englishExample: "Luckily, also <em>nowadays</em> he has followers.",
        russianWord: "сегодня",
        russianExample:
          "И, как показывают недавние события, у него есть последователи и <em>сегодня</em>.",
        association: "",
        groupId: 1678793305151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44435852,
        englishWord: "strict",
        englishExample: "We adhere to <em>strict</em> sterilization standards.",
        russianWord: "строгий, точный, требовательный",
        russianExample:
          "Кроме того, мы <em>строго</em> соблюдаем требования к стерильности.",
        association: "",
        groupId: 1678793305151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44435850,
        englishWord: "strict",
        englishExample:
          "Both say they have <em>strict</em> quality standards for the pot.",
        russianWord: "жесткие",
        russianExample:
          "Важно отметить, что оба способа имеют <em>жесткие</em> требования к качеству резьбы.",
        association: "",
        groupId: 1678793305151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44435834,
        englishWord: "mad",
        englishExample: "Or perhaps I am the <em>mad</em> monk of legend.",
        russianWord: "безумный",
        russianExample:
          "Или, возможно, я и есть <em>безумный</em> легендарный монах».",
        association: "",
        groupId: 1678793305151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44435769,
        englishWord: "either",
        englishExample: "I can then <em>either</em> agree or fight them.",
        russianWord: "либо",
        russianExample:
          "Они могут, однако, <em>либо</em> соглашаться на них, либо бороться с ними.",
        association: "",
        groupId: 1678793305151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44435718,
        englishWord: "sunset",
        englishExample: "But like a beautiful <em>sunset</em> it fades away.",
        russianWord: "закат",
        russianExample:
          "Но, так же, как прекрасный <em>закат</em>, это исчезает.",
        association: "",
        groupId: 1678793305151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44435701,
        englishWord: "fence",
        englishExample:
          "A wooden <em>fence</em> erected in 1952 partially restricted this freedom.",
        russianWord: "забор",
        russianExample:
          "Деревянный <em>забор</em>, возведенный в 1952 году, частично ограничил эту свободу.",
        association: "",
        groupId: 1678793305151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44435678,
        englishWord: "dull",
        englishExample: "I cannot imagine you were a <em>dull</em> child.",
        russianWord: "тупым",
        russianExample:
          "Я не могу представить, что ты была <em>тупым</em> ребенком.",
        association: "",
        groupId: 1678793305151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44435675,
        englishWord: "dull",
        englishExample: "Time spent with them was never <em>dull</em>.",
        russianWord: "скучно",
        russianExample:
          "Когда мы с ним проводили свободное время, то никогда не было <em>скучно</em>.",
        association: "",
        groupId: 1678793305151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44435645,
        englishWord: "countryside",
        englishExample: "We are soon out into the <em>countryside</em>.",
        russianWord: "сельскую местность",
        russianExample:
          "В скором времени мы хотим переехать в <em>сельскую местность</em>.",
        association: "",
        groupId: 1678793305151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44435641,
        englishWord: "countryside",
        englishExample:
          "Her symbolic cross is seen throughout the <em>countryside</em> and the world.",
        russianWord: "деревне",
        russianExample:
          "Её символический крест встречается по всей <em>деревне</em>, да и во всём мире.",
        association: "",
        groupId: 1678793305151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44435616,
        englishWord: "tiny",
        englishExample:
          "They came to this <em>tiny</em> island to cleanse their bodies and minds.",
        russianWord: "крошечный",
        russianExample:
          "Они приезжали на этот <em>крошечный</em> остров для того, чтобы очистить свои тела и умы...",
        association: "",
        groupId: 1678793305151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44435608,
        englishWord: "fortnight",
        englishExample:
          "Surely she could spare you for another <em>fortnight</em>.",
        russianWord: "две недели",
        russianExample:
          "Уверена, она позволила бы вам остаться еще на <em>две недели</em>.",
        association: "",
        groupId: 1678793305151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44435595,
        englishWord: "how come",
        englishExample: "then <em>how come</em> I couldn't get my hands",
        russianWord: "как так получилось",
        russianExample:
          "<em>как так получилось</em>, что я не мог получить в распоряжение",
        association: "",
        groupId: 1678793305151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44435590,
        englishWord: "how come",
        englishExample: "So, <em>how come</em> you never called us?",
        russianWord: "как случилось",
        russianExample:
          "И <em>как случилось</em>, что вы никогда не вызывали нас?",
        association: "",
        groupId: 1678793305151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44435575,
        englishWord: "how come",
        englishExample:
          "What about these five patients, <em>how come</em> they lived?",
        russianWord: "почему",
        russianExample:
          "Как насчет тех пяти пациентов, <em>почему</em> они остались в живых?",
        association: "",
        groupId: 1678793305151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44435412,
        englishWord: "messing around",
        englishExample: "Four hours just <em>messing around</em> in there.",
        russianWord: "бездельничаю",
        russianExample: "4 часа просто, <em>бездельничаю</em> там.",
        association: "",
        groupId: 1678793305151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44435408,
        englishWord: "messing around",
        englishExample:
          "He loved to play with his friends, playing in one another's gardens and simply <em>messing around</em>.",
        russianWord: "резвиться",
        russianExample:
          "Он обожал гулять со своими друзьями, играть в различные игры и просто <em>резвиться</em>.",
        association: "",
        groupId: 1678793305151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44435404,
        englishWord: "messing around",
        englishExample: "He was probably just <em>messing around</em>.",
        russianWord: "дурачился",
        russianExample: "Он, должно быть, всего лишь <em>дурачился</em>.",
        association: "",
        groupId: 1678793305151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44435376,
        englishWord: "decades",
        englishExample: "Many <em>decades</em> passed before women could vote.",
        russianWord: "десятилетий",
        russianExample:
          "Это произошло за много <em>десятилетий</em> до того, как женщинам предоставили право голосовать на выборах.",
        association: "",
        groupId: 1678793305151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44435369,
        englishWord: "wake-up call",
        englishExample:
          "World trade reduction in 2015 is another <em>wake-up call</em>.",
        russianWord: "тревожный звонок",
        russianExample:
          "Сокращение мировой торговли в 2015 г. - следующий <em>тревожный звонок</em>.",
        association: "",
        groupId: 1678793305151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44435368,
        englishWord: "wake-up call",
        englishExample:
          "And I think of this as a kind of existential <em>wake-up call</em>.",
        russianWord: "пробуждение",
        russianExample: "Для меня это своего рода <em>пробуждение</em>.",
        association: "",
        groupId: 1678793305151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44435366,
        englishWord: "wake-up call",
        englishExample: "That she didn't need a <em>wake-up call</em>.",
        russianWord: "будильник",
        russianExample: "Для этого ему не нужен был <em>будильник</em>.",
        association: "",
        groupId: 1678793305151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44435363,
        englishWord: "wake-up call",
        englishExample:
          "This warm friendship between China and Russia should be a <em>wake-up call</em> for the supporters of the current world order.",
        russianWord: "сигналом тревоги",
        russianExample:
          "Столь теплые отношения между Китаем и Россией должны стать <em>сигналом тревоги</em> для сторонников нынешнего мирового порядка.",
        association: "",
        groupId: 1678793305151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44400265,
        englishWord: "get to work",
        englishExample:
          "The bank manager who cannot <em>get to work</em> because of panic attacks.",
        russianWord: "приступить к работе",
        russianExample:
          "Управляющий банка, который не может <em>приступить к работе</em>, поскольку испытывает острые панические приступы.",
        association: "",
        groupId: 1678793305151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44400262,
        englishWord: "get to work",
        englishExample: "Which means I should probably <em>get to work</em>.",
        russianWord: "приступить к работе",
        russianExample:
          "А это значит, что мне вероятно, следует <em>приступить к работе</em>.",
        association: "",
        groupId: 1678793305151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44400241,
        englishWord: "sightseeing",
        englishExample:
          "On weekends the school offers a variety of <em>sightseeing</em> routes, the choice of which necessarily takes into account the opinion of the students themselves.",
        russianWord: "экскурсионные",
        russianExample:
          "По выходным дням школа предлагает разнообразные <em>экскурсионные</em> маршруты, в выборе которых обязательно учитывается мнение самих студентов.",
        association: "",
        groupId: 1678793305151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44400238,
        englishWord: "sightseeing",
        englishExample:
          "They will appeal to those tourists who love <em>sightseeing</em> holiday.",
        russianWord: "экскурсионный",
        russianExample:
          "Он будет интересен туристам, которые любят <em>экскурсионный</em> отдых.",
        association: "",
        groupId: 1678793305151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44400221,
        englishWord: "sightseeing",
        englishExample:
          "The major <em>sightseeing</em> locations and tourist spots are within walking distance.",
        russianWord: "достопримечательности",
        russianExample:
          "Все основные <em>достопримечательности</em> и популярные среди туристов места находятся в пределах пешей досягаемости от отеля.",
        association: "",
        groupId: 1678793305151,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44777910,
        englishWord: "to mist",
        englishExample:
          "The mode of recirculation of air has to, however to be included only for a short time as at this mode fresh air does not come to salon, and at the switched-off climatic installation of glass can <em>mist</em> over.",
        russianWord: "запотеть",
        russianExample:
          'Режим рециркуляции воздуха должен, однако быть включен лишь на короткое время, так как при этом режиме свежий воздух не поступает в салон, и при выключенной климатической установке стекла могут <em class="both">запотеть</em>.',
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44777908,
        englishWord: "a mist",
        englishExample:
          "Protects the <em>mist</em> and cool environment from natural wind outdoors.",
        russianWord: "туман",
        russianExample:
          "Защищает <em>туман</em> и прохладную окружающую среду от естественного ветра на открытом воздухе.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture:
          "https://images.ctfassets.net/30gqjjm1a9mg/7vEFFI9BQFlyfzWUVbBTof/858311059c6513a4d6708dd8b69a8896/Jessie_van_Neer_verschillen_in_mist_boven_autosnelweg.JPG",
      },
      {
        id: 44777899,
        englishWord: "tornado",
        englishExample: "We thought it was a <em>tornado</em>.",
        russianWord: "торнадо",
        russianExample: "Мы были уверены, что это было <em>торнадо</em>.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44777890,
        englishWord: "hurricane",
        englishExample:
          "Control the <em>hurricane</em> inside and guide its power constructively.",
        russianWord: "ураган",
        russianExample:
          "Контролируйте <em>ураган</em> внутри себя и используйте его энергию в созидательных целях.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44777886,
        englishWord: "a gale",
        englishExample:
          "I'll be over to fetch you as soon as the <em>gale</em> blows out.",
        russianWord: "шторм",
        russianExample:
          "А как только <em>шторм</em> утихнет, я приеду и заберу тебя.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://www.surfertoday.com/images/stories/gale-warning.jpg",
      },
      {
        id: 44777834,
        englishWord: "misty",
        englishExample: "Stands tiptoe on the <em>misty</em> mountain tops.",
        russianWord: "туманный",
        russianExample: "Стенды цыпочках на <em>туманные</em> горные вершины.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture:
          "https://springsadvertiser.co.za/wp-content/uploads/sites/28/2018/06/mist-1.jpg",
      },
      {
        id: 44777820,
        englishWord: "blustery",
        englishExample:
          "The images in this series were shot at Snoqualmie Falls in Washington state on a very <em>blustery</em> day.",
        russianWord: "ветреный",
        russianExample:
          "Картинки этой серии были сняты в Снокуалми, штат Вашингтон, в очень <em>ветреный</em> день.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture:
          "https://i.pinimg.com/originals/3e/b5/df/3eb5df771671bc70c653c8476000e7ac.jpg",
      },
      {
        id: 44777799,
        englishWord: "autumnal",
        englishExample:
          "It sounds very atmospheric and perfectly <em>autumnal</em>.",
        russianWord: "осенний",
        russianExample:
          "Фильм очень атмосферный и по-настоящему <em>осенний</em>.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture:
          "https://www.rombourne.co.uk/wp-content/uploads/Autumnal-Walks-Around-Bristol.jpg",
      },
      {
        id: 44777551,
        englishWord: "to heat",
        englishExample:
          "The <em>heat</em> can directly <em>heat</em> homes or businesses.",
        russianWord: "обогревать",
        russianExample:
          "<em>Горячей водой</em> можно непосредственно <em>обогревать</em> жилища, общественные здания и предприятия.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture:
          "https://conceptgroupllc.com/wp-content/uploads/2021/09/Modes-of-heat-transfer-condution-convection-radiation.png",
      },
      {
        id: 44777539,
        englishWord: "a heat",
        englishExample:
          "It takes overnight to <em>heat</em>, but holds <em>heat</em> well.",
        russianWord: "тепло",
        russianExample:
          "Для их <em>подогрева</em> требуется немало времени, зато они хорошо держат <em>тепло</em>.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://99px.ru/sstorage/53/2016/10/tmb_182074_4125.jpg",
      },
      {
        id: 44777496,
        englishWord: "sunshine",
        englishExample:
          "You are my morning <em>sunshine</em> the moment I wake.",
        russianWord: "солнечный свет",
        russianExample:
          "Ты мой утренний <em>солнечный свет</em> с того самого момента, когда я просыпаюсь.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44777488,
        englishWord: "sunshine",
        englishExample:
          "Perfect for people who like swimming and <em>sunshine</em>.",
        russianWord: "солнце",
        russianExample:
          "Идеально подходит для людей, которые любят плавание и <em>солнце</em>.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44777464,
        englishWord: "scorched",
        englishExample:
          "We returned five days later to our <em>scorched</em> land, the house untouched thanks to the courageous actions of neighbors and firefighters.",
        russianWord: "выжженную",
        russianExample:
          "Через пять дней мы вернулись на нашу <em>выжженную</em> землю, дом остался нетронутым благодаря смелым действиям соседей и пожарных.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44777460,
        englishWord: "to scorch",
        englishExample:
          "A lightning bolt may <em>scorch</em> an entire forest.",
        russianWord: "выжечь",
        russianExample: "Удар молнии способен <em>выжечь</em> целый лес.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44777413,
        englishWord: "shine",
        englishExample:
          "An evil person is like a dirty window, never lets <em>shine</em>.",
        russianWord: "свет",
        russianExample:
          'Злой человек как грязное окно: совсем не пропускает <em class="both">свет</em>.',
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44777404,
        englishWord: "shine",
        englishExample:
          "Duke decided that crystal <em>shine</em> would dazzle and frighten enemies.",
        russianWord: "блеск",
        russianExample:
          'Герцог решил, что <em class="both">блеск</em> кристалла ослепит врагов и этим испугает их.',
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44777399,
        englishWord: "shine",
        englishExample:
          "Maja and Olga were wonderful children whose smiles still <em>shine</em> brightly.",
        russianWord: "светить",
        russianExample:
          "'Майя и Ольга были прекрасными детьми, чей свет от их ярких улыбок продолжает <em>светить</em> до сих пор'.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44777397,
        englishWord: "shine",
        englishExample: "The sun will not <em>shine</em> forever.",
        russianWord: "сиять",
        russianExample: "Солнце тоже не будет <em>сиять</em> вечно.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44777068,
        englishWord: "humid",
        englishExample: "It was high temperature and <em>humid</em> w...",
        russianWord: "влажность",
        russianExample:
          "Совершенно очевидно, что высокая температура и <em>влажность</em> в са...",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44777059,
        englishWord: "humid",
        englishExample: "Keep the air around you <em>humid</em>.",
        russianWord: "влажный",
        russianExample:
          "Старайтесь, чтобы воздух вокруг вас был <em>влажный</em>.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44776972,
        englishWord: "sweltering",
        englishExample:
          "Due to the invention of artificial ice, and now even in the <em>sweltering</em> summer you can enjoy a slide on the ice.",
        russianWord: "знойный",
        russianExample:
          "Благодаря изобретению искусственного льда, теперь даже в <em>знойное</em> лето вы можете насладиться скольжением по льду.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44776867,
        englishWord: "to swelter",
        englishExample:
          "As Miami continues to <em>swelter</em> in a record winter heat wave bringing temperatures to the 90s Central and Mountain states are buried in snow.",
        russianWord: "изнывать от жары",
        russianExample:
          "Пока Майами <em>изнывает от жары</em>, и здесь установилась рекордная для зимы температура выше 30 градусов тепла центральные и горные штаты засыпаны снегом.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44776814,
        englishWord: "scorching",
        englishExample:
          "The local nature is almost untouched by buildings, low mountains protect from the <em>scorching</em> summer sun.",
        russianWord: "...",
        russianExample:
          "Местная природа почти не тронута застройками, невысокие горы защищают от <em>палящего</em> летом солнца.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44776803,
        englishWord: "scorching",
        englishExample:
          "The planet and its escaping gases are too far away to see directly, even at their <em>scorching</em> temperatures.",
        russianWord: "палящих",
        russianExample:
          "Планета и выходящие из нее газы слишком далеки, чтобы видеть прямо, даже при их <em>палящих</em> температурах.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44776800,
        englishWord: "scorching",
        englishExample:
          "Often, when someone hears Africa, they instantly visualize images of a <em>scorching</em> and barren desert.",
        russianWord: "палящей",
        russianExample:
          "Часто, когда кто-то слышит про Африку, они мгновенно визуализируют изображения <em>палящей</em> и бесплодной пустыни.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44776724,
        englishWord: "drizzle",
        englishExample:
          "Rainy season is ending (though it may still <em>drizzle</em> in Hanoi), the temps are cool, and the crowds have not yet descended.",
        russianWord: "моросить",
        russianExample:
          'Сезон дождей заканчивается (хотя в Ханое все еще может <em class="both">моросить</em>), временами прохладно, а толпы туристов еще не приехали.',
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44776697,
        englishWord: "drizzle",
        englishExample:
          "Surprised us terrible cold and light <em>drizzle</em>.",
        russianWord: "дождь",
        russianExample:
          'Удивленный нас страшный холод и мелкий <em class="both">дождь</em>.',
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44777919,
        englishWord: "fog",
        englishExample:
          "What looks like a heavy <em>fog</em> is actually extremely high air pollution.",
        russianWord: "туман",
        russianExample:
          "То, что выглядит, как густой <em>туман</em> на самом деле является высоким загрязнением воздуха.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44777858,
        englishWord: "foggy",
        englishExample: "The <em>foggy</em> mornings turn into beautiful days.",
        russianWord: "...",
        russianExample:
          "Мы не понимаем, что <em>туманные</em> утра превращаются в великолепные дни.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44777843,
        englishWord: "misty",
        englishExample:
          "Over the starboard quarter came a sullen bellowing roar, and then the <em>misty</em> air was torn by a series of infernal screams, supernaturally loud.",
        russianWord: "мглистый",
        russianExample:
          'Над правой раковиной пронесся ужасающий рев, затем <em class="both">мглистый</em> воздух разорвали дикие, неестественно громкие крики.',
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44776413,
        englishWord: "downpour",
        englishExample:
          "And they can be removed only when the first summer <em>downpour</em> passes.",
        russianWord: "ливень",
        russianExample:
          "А снять их можно только тогда, когда пройдет первый летний <em>ливень</em>.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44776405,
        englishWord: "pouring",
        englishExample: "It was <em>pouring</em> down rain that day.",
        russianWord: "проливной",
        russianExample:
          'Хотя и лил в этот день <em class="both">проливной</em> дождь.',
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44776396,
        englishWord: "pour",
        englishExample:
          "A stressful situation might prompt you to <em>pour</em> yourself a drink.",
        russianWord: "налить",
        russianExample:
          "Стрессовая ситуация может побудить вас <em>налить</em> себе выпить.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44776282,
        englishWord: "shower",
        englishExample: "I was caught in a <em>shower</em> this afternoon.",
        russianWord: "ливень",
        russianExample:
          'Сегодня утром я попал под <em class="both">ливень</em>.',
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44777575,
        englishWord: "heat",
        englishExample: "Ready-made meals, just <em>heat</em> and eat.",
        russianWord: "разогреть",
        russianExample:
          'Еда уже готова: надо просто <em class="both">разогреть</em> и съесть.',
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44777571,
        englishWord: "heat",
        englishExample:
          "One country reported provision of subsidies for low-income households for <em>heat</em> and electricity.",
        russianWord: "отопление",
        russianExample:
          'Одна страна сообщила о предоставлении субсидий на <em class="both">отопление</em> или электроэнергию домашним хозяйствам, имеющим низкие доходы.',
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44777520,
        englishWord: "heat",
        englishExample: "Warm air rises, but <em>heat</em> goes everywhere.",
        russianWord: "тепло",
        russianExample:
          "«Горячий воздух» поднимается, но «<em>тепло</em>» может двигаться в любом направлении.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44777457,
        englishWord: "scorch",
        englishExample:
          "It is able to fire several beams of light that can <em>scorch</em> the earth.",
        russianWord: "выжечь",
        russianExample:
          "Он способен стрелять несколькими лучами света, которые могут <em>выжечь</em> землю.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44777455,
        englishWord: "scorch",
        englishExample: "Theo is ready to <em>scorch</em> the earth down here.",
        russianWord: "выжечь",
        russianExample: "Тео готов <em>выжечь</em> здесь всё напалмом.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44777442,
        englishWord: "scorch",
        englishExample:
          "The fire shall <em>scorch</em> their faces, and they are sullen therein .",
        russianWord: "жечь",
        russianExample:
          "Будет <em>жечь</em> их лица огонь, и они в нём оскалятся.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44777400,
        englishWord: "shine",
        englishExample: "Either way, you'll <em>shine</em>.",
        russianWord: "блистать",
        russianExample: "Так или иначе, но ты будешь <em>блистать</em>.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44776037,
        englishWord: "muggy",
        englishExample:
          "It was too <em>muggy</em> for me to get to sleep last night.",
        russianWord: "душно",
        russianExample:
          "Прошлой ночью мне было слишком <em>душно</em>, чтобы уснуть.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44776021,
        englishWord: "overcast",
        englishExample:
          "Even the natural light on an <em>overcast</em> day helps.",
        russianWord: "...",
        russianExample:
          "Естественный свет даже в <em>пасмурный</em> день может помочь вам.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44775945,
        englishWord: "breezy",
        englishExample: "We're keeping it light and <em>breezy</em>.",
        russianWord: "...",
        russianExample: "У нас все легко и <em>просто</em>.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44775937,
        englishWord: "breezy",
        englishExample: "My week was light and <em>breezy</em>.",
        russianWord: "...",
        russianExample: "Моя неделя была легкой и <em>беззаботной</em>.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44775869,
        englishWord: "cool",
        englishExample: "Let it <em>cool</em> completely before moving it.",
        russianWord: "остыть",
        russianExample:
          'И обязательно дайте ему полностью <em class="both">остыть</em>, прежде чем перемещать его.',
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44775852,
        englishWord: "cool",
        englishExample:
          "Their main disadvantage is that they cannot <em>cool</em> more than one room.",
        russianWord: "охладить",
        russianExample:
          'Их основным недостатком является то, что они не могут <em class="both">охладить</em> более чем в одной комнате.',
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44775821,
        englishWord: "cool",
        englishExample:
          "You can also submerse the burn in <em>cool</em> water or apply <em>cool</em> compresses.",
        russianWord: "прохладный",
        russianExample:
          "Также вы можете погрузить место, пораженное ожогом, в <em>прохладную</em> воду или сделать <em>прохладный</em> компресс.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44775771,
        englishWord: "frost",
        englishExample: "As you know, <em>frost</em> causes oil to thicken.",
        russianWord: "мороз",
        russianExample:
          "Как известно, <em>мороз</em> приводит к тому, что масло загустевает.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44776911,
        englishWord: "swelter",
        englishExample:
          "For example, in the summer <em>swelter</em> in any apartment, the neighbors behind the wall, but still outside incessant cries of children, or transportation.",
        russianWord: "...",
        russianExample:
          "К примеру, летом в любой квартире <em>духота</em>, за стеной соседи, да ещё и за окном непрестанные крики детей или транспорт.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44775755,
        englishWord: "freeze over",
        englishExample:
          "Well, with all this climate change, anywhere could <em>freeze over</em>.",
        russianWord: "замерзнуть",
        russianExample:
          "Что ж, со всеми этими климатическими изменениями, все может <em>замерзнуть</em>.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44776821,
        englishWord: "scorching",
        englishExample:
          "After I endured blistering winds, <em>scorching</em> desert...",
        russianWord: "...",
        russianExample:
          "После того как я испытал на себе жгучие ветра, <em>знойную</em> пустыню...",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44776812,
        englishWord: "scorching",
        englishExample:
          "The temperatures show a significant difference in the inland areas where summers can be <em>scorching</em> and winters are harsh.",
        russianWord: "...",
        russianExample:
          "Температуры имеют значительную разницу во внутренних районах, где лето может быть <em>палящим</em>, а зимы суровыми.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44775680,
        englishWord: "freeze",
        englishExample:
          "Perhaps the most dramatic, and under-reported, new aspect of this ongoing struggle has been the <em>freeze</em> on global shipping.",
        russianWord: "заморозка",
        russianExample:
          'Возможно, самым драматичным и неосвещённым новым аспектом этой продолжающейся борьбы стала <em class="both">заморозка</em> мировых грузоперевозок.',
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44775661,
        englishWord: "freeze",
        englishExample: "I have embryos that can <em>freeze</em>.",
        russianWord: "замерзнуть",
        russianExample:
          "У меня там эмбрионы, которые могут <em>замерзнуть</em>.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44775658,
        englishWord: "freeze",
        englishExample:
          "In fact cranberries <em>freeze</em> very well either whole or sliced.",
        russianWord: "заморозить",
        russianExample:
          "На самом деле клюкву <em>заморозить</em> очень хорошо в целом виде или нарезанный.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44776762,
        englishWord: "drizzled",
        englishExample:
          "Although it rained heavily in the surrounding areas, it only <em>drizzled</em> at the activity site.",
        russianWord: "моросил",
        russianExample:
          "Хотя в близлежащих районах шёл сильный дождь, в местах проведения акции он только <em>моросил</em>.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44776744,
        englishWord: "drizzling",
        englishExample: "Now, it was <em>drizzling</em> an hour ago.",
        russianWord: "моросил дождь",
        russianExample: 'Час назад <em class="both">моросил дождь</em>.',
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44775526,
        englishWord: "sleet",
        englishExample:
          "The sky had changed from clear, sunny cold, to driving <em>sleet</em> and mist.",
        russianWord: "мокрый снег",
        russianExample:
          "Небо было изменено с ясный, солнечный холод, к вождению <em>мокрый снег</em> и туман.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44775418,
        englishWord: "snowing",
        englishExample:
          "It shows two individuals walking outside while it is <em>snowing</em>.",
        russianWord: "идет снег",
        russianExample:
          "На нем изображены два человека, которые выходят на улицу, пока <em>идет снег</em>.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44775990,
        englishWord: "partly cloudy",
        englishExample:
          "For tomorrow, June 9, in our area is expected to <em>partly cloudy</em> weather, intermittent rain in places.",
        russianWord: "переменная облачность",
        russianExample:
          "На завтра, 9 июня, в нашей области ожидается <em>переменная облачность</em>, местами кратковременный дождь.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44775972,
        englishWord: "cloudy",
        englishExample:
          "Alternatively, you might like to shoot on a <em>cloudy</em> day.",
        russianWord: "облачный",
        russianExample:
          "В качестве альтернативы, вы можете попытаться поработать в пасмурный, либо <em>облачный</em> день.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44775953,
        englishWord: "breezy",
        englishExample:
          "I've been sitting here because it's quite <em>breezy</em>.",
        russianWord: "ветрено",
        russianExample:
          'Я сижу здесь, потому что здесь довольно <em class="both">ветрено</em>.',
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44775636,
        englishWord: "hail",
        englishExample: "Rain, <em>hail</em>, and nowhere to hide.",
        russianWord: "...",
        russianExample:
          "Дождь, <em>град</em>, и ничего поблизости, где можно было бы укрыться.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44758223,
        englishWord: "harsh",
        englishExample:
          "She never complains and thrives in <em>harsh</em>, wild environments.",
        russianWord: "...",
        russianExample:
          "Она никогда не жалуется и не процветает в <em>суровых</em>, диких условиях.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44758210,
        englishWord: "bleak",
        englishExample: "London is so <em>bleak</em> this time of year.",
        russianWord: "унылый",
        russianExample:
          'Лондон такой <em class="both">унылый</em> в это время года.',
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44758191,
        englishWord: "gloomy",
        englishExample:
          "On a <em>gloomy</em> day, you might need to wait a little longer, may be even up to 24 hours or more.",
        russianWord: "пасмурный",
        russianExample:
          'На <em class="both">пасмурный</em> день, вы, возможно, придется ждать немного дольше, может быть даже до 24 часов или более.',
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44758180,
        englishWord: "gloomy",
        englishExample: "Such <em>gloomy</em> days in your future.",
        russianWord: "...",
        russianExample: "Такие же <em>мрачные</em> дни ждут тебя в будущем.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44758132,
        englishWord: "wintry",
        englishExample:
          "There were gardens and paths and big trees, but everything looked dull and <em>wintry</em>.",
        russianWord: "зимний",
        russianExample:
          "Существовали сады и дорожки и большие деревья, но все выглядело скучным и <em>зимний</em>.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44758052,
        englishWord: "severe",
        englishExample:
          "This is especially important for patients with <em>severe</em> symptoms, to avoid <em>severe</em> breathing problems.",
        russianWord: "...",
        russianExample:
          "Это особенно важно для пациентов с <em>тяжелыми</em> симптомами, чтобы избежать <em>серьезных</em> проблем с дыханием.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44758065,
        englishWord: "severe",
        englishExample:
          "On the whole, the country has a <em>severe</em> climate.",
        russianWord: "суровый",
        russianExample:
          'В целом в стране <em class="both">суровый</em> климат.',
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44757971,
        englishWord: "frosty",
        englishExample:
          "The viewer can see a quiet <em>frosty</em> day at the very beginning of winter.",
        russianWord: "морозный",
        russianExample:
          'Зритель может увидеть тихий <em class="both">морозный</em> день в самом начале зимы.',
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44757918,
        englishWord: "freezing",
        englishExample:
          "It was on a <em>freezing</em> day in the middle of winter.",
        russianWord: "морозный",
        russianExample:
          'Был <em class="both">морозный</em> день, середина зимы.',
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44757868,
        englishWord: "icy",
        englishExample:
          "There are 18 levels and some of them are on <em>icy</em> roads.",
        russianWord: "...",
        russianExample:
          "Есть 18 уровней, и некоторые из них находятся на <em>обледенелых</em> дорогах.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44757853,
        englishWord: "crisp",
        englishExample: "Nice, clean start on this <em>crisp</em>, dry day.",
        russianWord: "свежий",
        russianExample:
          "Неплохо, чистый старт, в этот <em>свежий</em>, сухой день.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44757798,
        englishWord: "chilly",
        englishExample:
          "Winter brings <em>chilly</em>, occasionally frosty nights.",
        russianWord: "...",
        russianExample:
          "Зимой <em>прохладно</em>, иногда по ночам случаются заморозки.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44745660,
        englishWord: "thick",
        englishExample: "They usually have a <em>thick</em> body.",
        russianWord: "плотный",
        russianExample: "Они, как правило, имеют <em>плотный</em> каркас.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44745659,
        englishWord: "thick",
        englishExample:
          "The neighbouring plant emits <em>thick</em> smoke mixed with steam.",
        russianWord: "густой",
        russianExample:
          "Соседняя фабрика выбрасывает в атмосферу <em>густой</em> дым в смеси с паром.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44745658,
        englishWord: "thick",
        englishExample: "Because he thinks he's <em>thick</em>.",
        russianWord: "толстый",
        russianExample: "Он задумывается о том, что он <em>толстый</em>.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44745194,
        englishWord: "bitterly cold",
        englishExample:
          "Promised to be a beautiful day the sun shone but it was also <em>bitterly cold</em>.",
        russianWord: "очень холодно",
        russianExample:
          "Обещал быть прекрасный день светило солнце, но это было также <em>очень холодно</em>.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44738132,
        englishWord: "pollinate",
        englishExample:
          "It will never make honey or <em>pollinate</em> plants the way a bee does.",
        russianWord: "опылять",
        russianExample:
          "Она никогда не будет делать мёд или <em>опылять</em> растения как пчела.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44738116,
        englishWord: "pull down",
        englishExample: "They have to <em>pull down</em> that building.",
        russianWord: "снести",
        russianExample: "Ей придется и <em>снести</em> это здание.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44738109,
        englishWord: "flood",
        englishExample: "This <em>flood</em> will break a 1927 record.",
        russianWord: "наводнение",
        russianExample:
          "Если <em>наводнение</em> продлится и в июне, оно побьет рекорд 1927 года.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44738103,
        englishWord: "cured",
        englishExample: "I thought you just <em>cured</em> me.",
        russianWord: "вылечили",
        russianExample: "Я думал, вы только что меня <em>вылечили</em>.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44738100,
        englishWord: "cured",
        englishExample: "He was absolutely <em>cured</em> of his disease.",
        russianWord: "вылечена",
        russianExample:
          "Чудесным образом она была полностью <em>вылечена</em> от своей болезни.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44738093,
        englishWord: "cure",
        englishExample: "She takes her home to <em>cure</em> her.",
        russianWord: "вылечить",
        russianExample:
          "Он забирает женщину к себе, чтобы <em>вылечить</em> ее.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44738086,
        englishWord: "plant",
        englishExample:
          "Now we has a professional filter press plate <em>plant</em> and filter press <em>plant</em>.",
        russianWord: "завод",
        russianExample:
          "Теперь у нас есть профессиональная фильтровальная плита и <em>завод</em> фильтровального пресса.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44738063,
        englishWord: "conducted",
        englishExample:
          "The rst tests which they <em>conducted</em> with water-resistant French watches were disastrous.",
        russianWord: "провели",
        russianExample:
          'Первые испытания, которые они <em>провели</em> с "водостойкими" французскими часами, оказались безрезультатными.',
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44738059,
        englishWord: "conducted",
        englishExample:
          "Everyone was happy in the way the event was <em>conducted</em>.",
        russianWord: "проведено",
        russianExample:
          "Таким образом, все остались довольны тем, как было <em>проведено</em> данное мероприятие.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44737999,
        englishWord: "conduct",
        englishExample:
          "We <em>conduct</em> our economic policy so that it could serve sustainable development.",
        russianWord: "ведем",
        russianExample:
          "Мы все делаем продуманно, <em>ведем</em> свою экономическую политику так, чтобы она служила устойчивому развитию.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44737983,
        englishWord: "to conduct",
        englishExample:
          "These questions will likely remain unanswered until I can <em>conduct</em> a more thorough internal examination.",
        russianWord: "провести",
        russianExample:
          "Эти вопросы, вероятно, останутся без ответа, пока мне не удастся <em>провести</em> более тщательный внутренний осмотр.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44737982,
        englishWord: "conduct",
        englishExample:
          "Anyone can <em>conduct</em> their own little patent search.",
        russianWord: "провести",
        russianExample:
          "Любой желающий мог <em>провести</em> на нем свой собственный патентный поиск.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44737941,
        englishWord: "conduct",
        englishExample: "It may also constitute unlawful <em>conduct</em>.",
        russianWord: "поведения",
        russianExample:
          "Кроме того, оно может стать причиной формирования противоправного <em>поведения</em>.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44737939,
        englishWord: "conduct",
        englishExample:
          "They go far beyond regulating the <em>conduct</em> of war on the battlefield.",
        russianWord: "ведение",
        russianExample:
          "Эти нормы выходят далеко за рамки того, как регламентировать <em>ведение</em> войны на полях сражений.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44737853,
        englishWord: "compete",
        englishExample:
          "Conventional medicine cannot and should not <em>compete</em>.",
        russianWord: "конкурировать",
        russianExample:
          "«С государственной медициной <em>конкурировать</em> невозможно и не нужно.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44737667,
        englishWord: "live up to expectations",
        englishExample:
          "Our hockey team in a difficult struggle managed to <em>live up to expectations</em>, repeating the success, achieved 26 years ago.",
        russianWord: "оправдать ожидания",
        russianExample:
          "Хоккейная сборная в трудной борьбе сумела <em>оправдать ожидания</em>, повторив успех 26-летней давности.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44737650,
        englishWord: "blizzard",
        englishExample:
          "They can go through anything - cold, <em>blizzard</em>.",
        russianWord: "метель",
        russianExample:
          "Они могут выдержать что угодно - и мороз, и <em>метель</em>.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44737634,
        englishWord: "breadwinner",
        englishExample:
          "Fewer and fewer American families can survive with one <em>breadwinner</em>.",
        russianWord: "кормилец",
        russianExample:
          "Все меньше и меньше американских семей могут выжить, когда в семье только один <em>кормилец</em>.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44737605,
        englishWord: "to concern",
        englishExample:
          "They deeply <em>concern</em> many people, especially parents.",
        russianWord: "волнуют",
        russianExample:
          "Эти <em>вопросы волнуют</em> многих людей, в первую очередь родителей.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44737597,
        englishWord: "concern",
        englishExample:
          "That should <em>concern</em> everyone who believes in freedom.",
        russianWord: "стать приоритетом",
        russianExample:
          "Это должно <em>стать приоритетом</em> для каждого, кто верит в свободу мысли.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44737588,
        englishWord: "concern",
        englishExample:
          "Recommendations now generally <em>concern</em> substantive issues.",
        russianWord: "касаются",
        russianExample:
          "Выносимые в настоящее время рекомендации, как правило, <em>касаются</em> вопросов существа.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44737571,
        englishWord: "concern",
        englishExample:
          "Even gun owners have little cause for <em>concern</em>.",
        russianWord: "беспокойства",
        russianExample:
          "Но, не смотря на это, у огнеборцев остается не мало поводов для <em>беспокойства</em>.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 41600485,
        englishWord: "shark",
        englishExample: "I've never seen a <em>shark</em>.",
        russianWord: "акулы",
        russianExample: "Я так и не увидел ни одной <em>акулы</em>.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 40349715,
        englishWord: "parrot",
        englishExample: "The world's largest <em>parrot</em> cannot fly.",
        russianWord: "попугай",
        russianExample:
          "Самый большой <em>попугай</em> в мире какапо не может летать.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44779247,
        englishWord: "insisted on",
        englishExample:
          "She <em>insisted on</em> equal education for her sons and daughter.",
        russianWord: "настаивал на",
        russianExample:
          "Он <em>настаивал на</em> равном по количеству и качеству образовании для своих сыновей и дочерей.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44779192,
        englishWord: "respective",
        englishExample:
          "No doubt that the <em>respective</em> response is expected shortly.",
        russianWord: "соответствующий",
        russianExample:
          "Нет сомнений, что <em>соответствующий</em> ответ будет дан в самое ближайшее время.",
        association: "",
        groupId: 1679383138675,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44855648,
        englishWord: "specie",
        englishExample:
          "Therefore, the government has decided to involve volunteers in <em>specie</em>, from 1 January 2016, raising the salaries of contractors.",
        russianWord: "звонкой монетой",
        russianExample:
          "Поэтому государство решило привлечь добровольцев <em>звонкой монетой</em>, с 1 января 2016 года повысив зарплаты контрактникам.",
        association: "",
        groupId: 1679639030098,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44855500,
        englishWord: "despite",
        englishExample:
          "They married <em>despite</em> a 40-year age difference.",
        russianWord: "несмотря на",
        russianExample:
          "В 1974 году они поженились, <em>несмотря на</em> разницу в возрасте в 24 года.",
        association: "",
        groupId: 1679639030098,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44855354,
        englishWord: "rush",
        englishExample: "We are conscious not to <em>rush</em> innovations.",
        russianWord: "спешить",
        russianExample:
          "Однако я считаю, что не надо <em>спешить</em> с инновациями.",
        association: "",
        groupId: 1679639030098,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44855337,
        englishWord: "swelling",
        englishExample:
          "Among the survivors, only 27 percent had severe <em>swelling</em>.",
        russianWord: "отек",
        russianExample:
          "Среди оставшихся в живых, только 27% детей имели сильный <em>отек</em>.",
        association: "",
        groupId: 1679639030098,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44855333,
        englishWord: "swell",
        englishExample:
          "Some drugs used to treat high blood pressure, diabetes, and inflammation can make your body hold on to too much water, and that can make your feet <em>swell</em>.",
        russianWord: "отек",
        russianExample:
          'Некоторые лекарства, используемые для лечения высокого кровяного давления, диабета и воспаления, могут заставить ваш организм удерживать лишнюю жидкость, и это может вызвать <em class="both">отек</em> ног.',
        association: "",
        groupId: 1679639030098,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44855306,
        englishWord: "swell",
        englishExample:
          "Without the perceived barrier caused by sodium, fluids moving around our cells are absorbed in, making the cells <em>swell</em>.",
        russianWord: "набухание",
        russianExample:
          'Без видимого барьера, вызванного натрием, жидкости, которые движутся вокруг наших клеток, поглощаются, вызывая их <em class="both">набухание</em>.',
        association: "",
        groupId: 1679639030098,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44855285,
        englishWord: "swell",
        englishExample:
          "Fingers and toes may <em>swell</em> and take on a sausage-like appearance known as dactylitis.",
        russianWord: "набухать",
        russianExample:
          "Пальцы и пальцы ног могут <em>набухать</em> и приобретать вид сосисок, известных как дактилит.",
        association: "",
        groupId: 1679639030098,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44855286,
        englishWord: "swell",
        englishExample:
          "When the disease progresses, the nodules begin to increase in size, <em>swell</em> and even protrude outward.",
        russianWord: "отекать",
        russianExample:
          "При прогрессировании заболевания узелки начинают увеличиваться в размерах, <em>отекать</em> и даже выступать наружу.",
        association: "",
        groupId: 1679639030098,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44855629,
        englishWord: "specie",
        englishExample: "This <em>specie</em> has no natural predators.",
        russianWord: "разновидность",
        russianExample:
          "У этой <em>разновидности</em> нет никаких естественных хищников.",
        association: "",
        groupId: 1679639030098,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44855611,
        englishWord: "species",
        englishExample:
          "First, many <em>species</em> of turtles are aggressive, especially marine <em>species</em>.",
        russianWord: "виды",
        russianExample:
          "Во-первых, многие <em>виды</em> черепах агрессивны, особенно морские <em>разновидности</em>.",
        association: "",
        groupId: 1679639030098,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44855584,
        englishWord: "collapse",
        englishExample: "I honestly think the economy might <em>collapse</em>.",
        russianWord: "рухнуть",
        russianExample:
          'Я, честно, думаю, что экономика может <em class="both">рухнуть</em>.',
        association: "",
        groupId: 1679639030098,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44855559,
        englishWord: "collapse",
        englishExample:
          "Then the whole system will <em>collapse</em> under its own weight.",
        russianWord: "разрушаться",
        russianExample:
          'И таким образом, целая система начинает <em class="both">разрушаться</em> под своим собственным весом.',
        association: "",
        groupId: 1679639030098,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44855526,
        englishWord: "collapse",
        englishExample:
          "What happened yesterday is a complete <em>collapse</em> of that theory.",
        russianWord: "крах",
        russianExample:
          "То, что произошло вчера, - это полных <em>крах</em> данной теории.",
        association: "",
        groupId: 1679639030098,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44829457,
        englishWord: "inappropriate",
        englishExample:
          'The recommended solution of recruiting "professionals" seemed completely <em>inappropriate</em>.',
        russianWord: "...",
        russianExample:
          'Предлагаемое решение, заключающееся в том, чтобы принять на службу "профессионалов", представляется совершенно <em>неприемлемым</em>.',
        association: "",
        groupId: 1679639030098,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44829441,
        englishWord: "inappropriate",
        englishExample:
          "This brunch made me realize That I still like <em>inappropriate</em> guys.",
        russianWord: "...",
        russianExample:
          "На этом бранче я поняла, что мне всё ещё нравятся <em>неподходящие</em> парни.",
        association: "",
        groupId: 1679639030098,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44829393,
        englishWord: "appropriate",
        englishExample: "I'm not trying to <em>appropriate</em> your culture.",
        russianWord: "присвоить",
        russianExample:
          'Я не пытаюсь <em class="both">присвоить</em> вашу культуру.',
        association: "",
        groupId: 1679639030098,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44829376,
        englishWord: "appropriate",
        englishExample:
          "There is an old joke that is <em>appropriate</em> in this situation.",
        russianWord: "уместный",
        russianExample:
          'Есть анекдот, <em class="both">уместный</em> в данной ситуации.',
        association: "",
        groupId: 1679639030098,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44829318,
        englishWord: "leaflets",
        englishExample:
          "Police took this blurry photo of me holding <em>leaflets</em> as evidence.",
        russianWord: "листовки",
        russianExample:
          "Полицейские сделали вот эту мутную фотографию, где я держу <em>листовки</em> как доказательство вины.",
        association: "",
        groupId: 1679639030098,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44829254,
        englishWord: "dial",
        englishExample:
          "You'll have to make the computer <em>dial</em> in faster.",
        russianWord: "набор",
        russianExample:
          'Вы должны сделать компьютерный <em class="both">набор</em> быстрее.',
        association: "",
        groupId: 1679639030098,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44829251,
        englishWord: "dial",
        englishExample:
          "There's quick <em>dial</em> function, up to 8 numbers.",
        russianWord: "набор",
        russianExample:
          'Есть и быстрый <em class="both">набор</em>, до 8 номеров.',
        association: "",
        groupId: 1679639030098,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44829241,
        englishWord: "dial",
        englishExample:
          "Phone number that phone user must <em>dial</em> to access emergency services.",
        russianWord: "набрать",
        russianExample:
          "Телефонный номер, который абонент должен <em>набрать</em>, чтобы связаться со службами экстренной помощи.",
        association: "",
        groupId: 1679639030098,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44829227,
        englishWord: "dial",
        englishExample:
          "Therefore, if your plan is to see local time on the <em>dial</em>, then it (the <em>dial</em>) will have to be slightly modernized.",
        russianWord: "циферблат",
        russianExample:
          "Следовательно, если в ваши планы входит видеть на <em>циферблате</em> местное время, то его (<em>циферблат</em>) придется слегка модернизировать.",
        association: "",
        groupId: 1679639030098,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44829050,
        englishWord: "northern",
        englishExample: "",
        russianWord: "северный",
        russianExample: "",
        association: "",
        groupId: 1679639030098,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44828959,
        englishWord: "misuse",
        englishExample:
          "Because those rules mean that companies cannot <em>misuse</em> their power to undermine competition.",
        russianWord: "злоупотреблять",
        russianExample:
          'Потому что эти правила значат, что компании не могут <em class="both">злоупотреблять</em> своей властью для подрыва конкуренции.',
        association: "",
        groupId: 1679639030098,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44828952,
        englishWord: "misuse",
        englishExample: "Anything over 150mgs/day is pure <em>misuse</em>.",
        russianWord: "злоупотребление",
        russianExample:
          "Все, что свыше 150mgs/ день чистое <em>злоупотребление</em>.",
        association: "",
        groupId: 1679639030098,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44829596,
        englishWord: "nurse",
        englishExample: "Never you fear, I'll <em>nurse</em> her like a baby.",
        russianWord: "ухаживать",
        russianExample:
          'Насчет этого не волнуйтесь, буду <em class="both">ухаживать</em> за ней, как за дитем.',
        association: "",
        groupId: 1679639030098,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44829585,
        englishWord: "nurse",
        englishExample: "For example, you can be a cook or a <em>nurse</em>.",
        russianWord: "няня",
        russianExample:
          'Например, это может быть повар или же <em class="both">няня</em>.',
        association: "",
        groupId: 1679639030098,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44829567,
        englishWord: "nurse",
        englishExample:
          "Something <em>nurse</em> Hopkins said concerning Mary.",
        russianWord: "сиделка",
        russianExample: "То, что сказала <em>сиделка</em> Хопкинс про Мэри.",
        association: "",
        groupId: 1679639030098,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44829561,
        englishWord: "nurse",
        englishExample:
          "Your radiographer or <em>nurse</em> can advise you on skin care during this time.",
        russianWord: "медсестра",
        russianExample:
          "Ваш рентгенолог или <em>медсестра</em> могут дать вам советы по уходу за кожей в течение этого времени.",
        association: "",
        groupId: 1679639030098,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44829472,
        englishWord: "inappropriate",
        englishExample:
          "Maybe laughter seems <em>inappropriate</em> right now.",
        russianWord: "...",
        russianExample:
          "Сейчас такое время, что смех кажется <em>неуместным</em>.",
        association: "",
        groupId: 1679639030098,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44829370,
        englishWord: "appropriate",
        englishExample:
          "Climatic conditions determine the <em>appropriate</em> level of insulation as well as the most <em>appropriate</em> type to choose - bulk, reflective or composite.",
        russianWord: "соответствующий",
        russianExample:
          "Климатические условия определяют <em>соответствующий</em> уровень изоляции, а также наиболее <em>подходящий</em> тип - насыпной, отражающий или композитный.",
        association: "",
        groupId: 1679639030098,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44829321,
        englishWord: "leaflet",
        englishExample:
          "It is better if the <em>leaflet</em> contains one specific goal, one motivation for action.",
        russianWord: "листовка",
        russianExample:
          "Лучше если <em>листовка</em> содержит одну конкретную цель, одно побуждение к действию.",
        association: "",
        groupId: 1679639030098,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44829284,
        englishWord: "accidentally",
        englishExample:
          "These spills can occur <em>accidentally</em> or intentionally.",
        russianWord: "случайно",
        russianExample:
          "Таким образом, эти странные эффекты могут быть вызваны <em>случайно</em> или даже намеренно .",
        association: "",
        groupId: 1679639030098,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44896344,
        englishWord: "caged",
        englishExample: "I keep it <em>caged</em> but I can't control it.",
        russianWord: "в клетке",
        russianExample:
          "Я держу её <em>в клетке</em>, но не могу контролировать.",
        association: "",
        groupId: 1679850745417,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44896334,
        englishWord: "cage",
        englishExample: "The <em>cage</em> must also always be covered.",
        russianWord: "клетка",
        russianExample:
          "Кроме того, <em>клетка</em> должна быть все время накрыта.",
        association: "",
        groupId: 1679850745417,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44896304,
        englishWord: "bark",
        englishExample:
          "When the thief heard the dog <em>bark</em>, he took to his heels.",
        russianWord: "лай",
        russianExample:
          'Когда вор услышал собачий <em class="both">лай</em>, он удрал.',
        association: "",
        groupId: 1679850745417,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44896297,
        englishWord: "bark",
        englishExample:
          "Stripping the <em>bark</em> requires great skill, as the inner <em>bark</em> must not be damaged.",
        russianWord: "кора",
        russianExample:
          "Снимание <em>коры</em> требует огромного умения, поскольку внутренняя <em>кора</em> не должна быть задета.",
        association: "",
        groupId: 1679850745417,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44896171,
        englishWord: "extinct",
        englishExample:
          "Some 15 species and possibly one recently <em>extinct</em>.",
        russianWord: "...",
        russianExample:
          "Около 15 видов, и, возможно, один недавно <em>вымерших</em>.",
        association: "",
        groupId: 1679850745417,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44896143,
        englishWord: "ceiling",
        englishExample: "I thought that was his <em>ceiling</em>.",
        russianWord: "потолок",
        russianExample: "«Я знал, что это мой <em>потолок</em>».",
        association: "",
        groupId: 1679850745417,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44895971,
        englishWord: "violent",
        englishExample:
          "You may have watched <em>violent</em> or dramatic media.",
        russianWord: "...",
        russianExample:
          "Возможно, вам станет известно о <em>насильственных</em> и трагических событиях.",
        association: "",
        groupId: 1679850745417,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44896365,
        englishWord: "evidence",
        englishExample:
          "Luckily for us, in this case, <em>evidence</em> of absence is not absence of <em>evidence</em>.",
        russianWord: "доказательство",
        russianExample:
          "К счастью для нас, в этом деле <em>доказательство</em> отсутствия - не отсутствие <em>доказательств</em>.",
        association: "",
        groupId: 1679850745417,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44896358,
        englishWord: "court",
        englishExample:
          "An appellate <em>court</em> is a <em>court</em> that hears cases on appeal from another <em>court</em>.",
        russianWord: "суд",
        russianExample:
          "Апелляционный <em>суд</em> - <em>суд</em>, который слушает дела на апелляцию от другого <em>суда</em>.",
        association: "",
        groupId: 1679850745417,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44896307,
        englishWord: "bark",
        englishExample:
          "A stray dog used to <em>bark</em> at the locals in the street.",
        russianWord: "гавкать",
        russianExample:
          'Бродячая собака <em class="both">гавкать</em> на местных жителей на улице.',
        association: "",
        groupId: 1679850745417,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44894730,
        englishWord: "insist on",
        englishExample:
          "Marshal, I <em>insist on</em> going to see the hospital immediately.",
        russianWord: "...",
        russianExample:
          "Маршал, я <em>настаиваю на</em> том, чтобы немедленно пойти и осмотреть больницу.",
        association: "",
        groupId: 1679850745417,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44894724,
        englishWord: "insist on",
        englishExample: "I must <em>insist on</em> being paid right now.",
        russianWord: "настаивать",
        russianExample:
          "Я вынужден <em>настаивать</em>, чтобы вы расплатились со мной немедленно.",
        association: "",
        groupId: 1679850745417,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44896260,
        englishWord: "pull down",
        englishExample:
          "Here you can define the group mode at the course level by a <em>pull down</em> menu.",
        russianWord: "...",
        russianExample:
          "С помощью этого <em>выпадающего</em> списка можно задать режим групповой работы на уровне курса.",
        association: "",
        groupId: 1679850745417,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44896250,
        englishWord: "pull down",
        englishExample:
          "They know that evil spirits do not break steps, spill garbage or <em>pull down</em> fences.",
        russianWord: "...",
        russianExample:
          "Они знают, что злые духи не ломают стремянки, не разбрасывают мусор или не <em>сносят</em> заборы.",
        association: "",
        groupId: 1679850745417,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44894153,
        englishWord: "tear",
        englishExample:
          "And every episode has a <em>tear</em> jerking ending or a curious cliffhanger.",
        russianWord: "слезоточивый",
        russianExample:
          'И каждый эпизод имеет <em class="both">слезоточивый</em> финал или любопытный cliffhanger. +3',
        association: "",
        groupId: 1679850745417,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44894137,
        englishWord: "tear",
        englishExample:
          "We decided to <em>tear</em> off the roof and <em>tear</em> out the floor and rebuild both.",
        russianWord: "оторвать",
        russianExample:
          "Мы решили <em>оторвать</em> крышу, <em>оторвать</em> пол и восстановить оба.",
        association: "",
        groupId: 1679850745417,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44894084,
        englishWord: "regarding",
        englishExample:
          "This requires high alertness <em>regarding</em> cancer.",
        russianWord: "в отношении",
        russianExample:
          "Для этого необходима, прежде всего, высокая настороженность <em>в отношении</em> рака.",
        association: "",
        groupId: 1679850745417,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44894058,
        englishWord: "encounter",
        englishExample:
          "But you will inevitably <em>encounter</em> difficult people who oppose what you think.",
        russianWord: "сталкиваться с",
        russianExample:
          "Но вы неизбежно будете <em>сталкиваться с</em> трудными людьми, которые выступают против того, что вы думаете.",
        association: "",
        groupId: 1679850745417,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44894735,
        englishWord: "insistence",
        englishExample:
          "His <em>insistence</em> that economics could be reduced to disciplined mathematical analysis persists today.",
        russianWord: "настойчивость",
        russianExample:
          "Его <em>настойчивость</em> в том, что экономика может быть сведена к дисциплинированному математическому анализу, сохраняется и сегодня.",
        association: "",
        groupId: 1679850745417,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44894709,
        englishWord: "insist on",
        englishExample: "",
        russianWord: "настаивать на",
        russianExample: "",
        association: "",
        groupId: 1679850745417,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44894143,
        englishWord: "tear",
        englishExample: "No revolution is worth one child's <em>tear</em>.",
        russianWord: "...",
        russianExample:
          "Ни одно революция не стоит, как говорят, и <em>слезинки</em> одного ребенка.",
        association: "",
        groupId: 1679850745417,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44894077,
        englishWord: "regarding",
        englishExample:
          "Many people face internal conflicts <em>regarding</em> their gender.",
        russianWord: "по поводу",
        russianExample:
          "Многие люди сталкиваются с внутренними конфликтами <em>по поводу</em> своего пола.",
        association: "",
        groupId: 1679850745417,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44894072,
        englishWord: "pillow",
        englishExample: "All I need is a good <em>pillow</em>.",
        russianWord: "подушка",
        russianExample: "Всё, что мне нужно, - это хорошая <em>подушка</em>.",
        association: "",
        groupId: 1679850745417,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44894066,
        englishWord: "encounter",
        englishExample:
          "There is another potential problem you might <em>encounter</em> if you take sam-e.",
        russianWord: "столкнуться",
        russianExample:
          "Существует еще одна потенциальная проблема, которыми вы можете <em>столкнуться</em>, если вы берете sam-e.",
        association: "",
        groupId: 1679850745417,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 44779258,
        englishWord: "extinction",
        englishExample: "We are in danger of <em>extinction</em>.",
        russianWord: "вымирание",
        russianExample: "В противном случае, нам грозит <em>вымирание</em>».",
        association: "",
        groupId: 1679850745417,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 43618117,
        englishWord: "tear",
        englishExample:
          "But secrets revealed will threaten to <em>tear</em> you apart.",
        russianWord: "разорвать",
        russianExample:
          "Но секреты, которые будут раскрыты, грозят <em>разорвать</em> тебя на части.",
        association: "",
        groupId: 1679850745417,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 47045810,
        englishWord: "make do with",
        englishExample:
          "In that case, we would have to <em>make do with</em> organizing a truce until the next crisis.",
        russianWord: "довольствоваться",
        russianExample:
          "В том случае, нам пришлось бы <em>довольствоваться</em> налаживанием перемирия до следующего кризиса.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 47045774,
        englishWord: "take the lead",
        englishExample:
          "That is how countries that encourage innovation <em>take the lead</em> - and stay there.",
        russianWord: "берут на себя инициативу",
        russianExample:
          "Это способ, как страны поощряющие инновации <em>берут на себя инициативу</em> - и остаются там.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 47045773,
        englishWord: "take the lead",
        englishExample:
          "I am hoping that the Latin American Pope, Francis will <em>take the lead</em> there.",
        russianWord: "возглавит",
        russianExample:
          "Я надеюсь, что Латиноамериканский папа Франциск <em>возглавит</em> этот процесс.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 47045734,
        englishWord: "to make sense",
        englishExample: "The game has <em>to make sense</em>.",
        russianWord: "иметь смысл",
        russianExample: "В первую очередь, игра должна <em>иметь смысл</em>.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 47045732,
        englishWord: "to make sense",
        englishExample:
          "A lot of annoying clichés are starting <em>to make sense</em>.",
        russianWord: "обретать смысл",
        russianExample:
          "Много раздражающих клише начинают <em>обретать смысл</em>.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 47044292,
        englishWord: "irresponsible",
        englishExample:
          "Many would suggest I made an <em>irresponsible</em> change in 2015.",
        russianWord: "безответственный",
        russianExample:
          "Многие сказали бы, что я сделал <em>безответственный</em> шаг в 2015 году.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture:
          "https://thumbs.dreamstime.com/b/irresponsible-citizen-passing-litter-bin-throwing-garbage-ground-ignoring-warning-sign-disgusting-human-behavior-city-191755018.jpg",
      },
      {
        id: 46598843,
        englishWord: "undernourishment",
        englishExample:
          "However, some 795 million still experience chronic <em>undernourishment</em> today.",
        russianWord: "недоедание",
        russianExample:
          "Тем не менее, примерно 795 миллионов человек по-прежнему испытывают сегодня хроническое <em>недоедание</em>.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture:
          "https://st2.depositphotos.com/4297405/6329/v/600/depositphotos_63299517-stock-illustration-illustration-representing-a-child-sitting.jpg",
      },
      {
        id: 46598822,
        englishWord: "attainable",
        englishExample:
          "Failure makes the same goal seem less <em>attainable</em>.",
        russianWord: "достижимой",
        russianExample:
          "Неудача делает ту же цель, кажется, менее <em>достижимой</em>.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture:
          "https://digitalbusinessblog.files.wordpress.com/2014/05/attainable-goal.jpg",
      },
      {
        id: 46598637,
        englishWord: "dire",
        englishExample: "Both among the most <em>dire</em> of crimes.",
        russianWord: "ужасный, страшный, тяжелый, острый",
        russianExample: "И то, и другое - самые <em>ужасные</em> преступления.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46598540,
        englishWord: "subsistence",
        englishExample:
          'Keynes spoke of solving "the economic problem, the struggle for <em>subsistence</em>", but few people would choose to settle for mere <em>subsistence</em>.',
        russianWord: "пропитание",
        russianExample:
          "Кейнс говорил о решении «экономической проблемы, борьбы за <em>пропитание</em>», но мало кто предпочел бы согласиться на простое <em>пропитание</em>.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46598536,
        englishWord: "subsistence",
        englishExample:
          "Many Ethiopian farmers do not produce enough even for their own <em>subsistence</em>.",
        russianWord: "существования",
        russianExample:
          "Многие эфиопские фермеры собирают урожаи, которых не хватает даже для обеспечения их собственного <em>существования</em>.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46598462,
        englishWord: "threshold",
        englishExample:
          "My students generally have trouble enough meeting that <em>threshold</em>.",
        russianWord: "порог",
        russianExample:
          "Мои студенты, как правило, имеют проблемы достаточно совещании этот <em>порог</em>.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46598410,
        englishWord: "household",
        englishExample:
          "Measures of farm <em>household</em> net worth have several uses in estimation and analyses of <em>household</em> economic status and wealth management issues.",
        russianWord: "домохозяйств",
        russianExample:
          "Показатели чистой стоимости фермерских <em>домохозяйств</em> могут быть разнообразно использованы при оценке и анализе экономического положения <em>домохозяйств</em> и вопросов, связанных с управлением богатством.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46598375,
        englishWord: "expenditure",
        englishExample:
          "Operating <em>expenditure</em> increased, due particularly to rental <em>expenditure</em>.",
        russianWord: "расходов",
        russianExample:
          "Рост оперативных <em>расходов</em> был вызван главным образом увеличением <em>расходов</em> на аренду.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46598329,
        englishWord: "regularity",
        englishExample:
          "One can trace a similar <em>regularity</em> in social evolution.",
        russianWord: "закономерность",
        russianExample:
          "Можно констатировать такую <em>закономерность</em> социальной эволюции.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46598327,
        englishWord: "regularity",
        englishExample:
          "I was having severe problems with <em>regularity</em>.",
        russianWord: "регулярностью",
        russianExample:
          "Однако у меня все еще были проблемы с <em>регулярностью</em>.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46598166,
        englishWord: "measure",
        englishExample:
          "Well, you <em>measure</em> and <em>measure</em> and <em>measure</em>.",
        russianWord: "измерять",
        russianExample:
          "Можно её <em>измерять</em> и <em>измерять</em> и <em>измерять</em>...",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46598162,
        englishWord: "measure",
        englishExample:
          "Neither status constituted a disciplinary <em>measure</em>.",
        russianWord: "меры",
        russianExample:
          "Ни одна из принятых мер не может рассматриваться в качестве дисциплинарной <em>меры</em>.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46598161,
        englishWord: "measure",
        englishExample:
          "IR thermometers are designed to <em>measure</em> IR radiation from a device; they can't be used to <em>measure</em> air temperature.",
        russianWord: "измерения",
        russianExample:
          "Инфракрасные термометры предназначены для <em>измерения</em> инфракрасного излучения от устройств; их нельзя использовать для <em>измерения</em> температуры воздуха.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46598067,
        englishWord: "lack",
        englishExample:
          "Such factors include <em>lack</em> of understanding of the political qualification, <em>lack</em> of political experience, <em>lack</em> of professional communications and others.",
        russianWord: "недостаток",
        russianExample:
          "В их числе <em>недостаток</em> понимания сути политической специальности, <em>недостаток</em> практического опыта, <em>недостаток</em> профессиональных коммуникаций и другое.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46598061,
        englishWord: "severely",
        englishExample:
          "Natural disasters tend to destroy or <em>severely</em> disrupt terrestrial telecommunication networks.",
        russianWord: "серьезно",
        russianExample:
          "В результате стихийных бедствий, как правило, разрушаются или <em>серьезно</em> повреждаются наземные сети связи.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46598033,
        englishWord: "maize",
        englishExample:
          "Ethanol from crops such as sugarcane and <em>maize</em> are the main feedstock.",
        russianWord: "кукуруза",
        russianExample:
          "Этанол, получаемый из таких культур, как сахарный тростник и <em>кукуруза</em>, является важным сырьем.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46598007,
        englishWord: "sufficient",
        englishExample:
          "We have our costs under control and <em>sufficient</em> capital to grow.",
        russianWord: "достаточный",
        russianExample:
          "Наши расходы под контролем, и у нас есть <em>достаточный</em> капитал для роста.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46597997,
        englishWord: "starchy",
        englishExample:
          "Complex carbohydrates are found in legumes, whole grain breads and cereals, and <em>starchy</em> vegetables.",
        russianWord: "крахмалистые",
        russianExample:
          "Сложные углеводы находятся в бобовые, хлеб из цельного зерна и крупы и <em>крахмалистые</em> овощи.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46518189,
        englishWord: "aware of",
        englishExample:
          "You're <em>aware of</em> what happened to my establishment.",
        russianWord: "знаете",
        russianExample:
          "Вы же <em>знаете</em>, что случилось с моим хозяйством вчера ночью.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46518165,
        englishWord: "surveillance",
        englishExample:
          "But two years on, she's chosen <em>surveillance</em> over surgery.",
        russianWord: "наблюдение",
        russianExample:
          "Прошло уже два года с тех пор, как она выбрала <em>наблюдение</em> вместо операции.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46518137,
        englishWord: "to monitor",
        englishExample:
          "That includes development of a system <em>to monitor</em> telecom service quality.",
        russianWord: "мониторинга",
        russianExample:
          "Сюда относится, в том числе, деятельность по развитию системы <em>мониторинга</em> качества услуг связи.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46518128,
        englishWord: "keep track of",
        englishExample:
          "It is also important to <em>keep track of</em> what you write and speak, especially in a foreign language.",
        russianWord: "следить за",
        russianExample:
          "Также важно <em>следить за</em> тем, что вы пишите и говорите, особенно на иностранном языке.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46518098,
        englishWord: "deterrent to crime",
        englishExample:
          "An ever-growing majority of people and leaders share the view that the death penalty is no better a <em>deterrent to crime</em> than other punishments, and that it does not contribute to public safety.",
        russianWord: "средства сдерживания преступности",
        russianExample:
          "Большинство граждан и лидеров (и их количество постоянно растет) разделяют мнение, что в качестве <em>средства сдерживания преступности</em> смертная казнь не эффективнее, чем любой другой вид наказания, и не способствует общественной безопасности.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46518073,
        englishWord: "crime prevention",
        englishExample:
          "In sum, community <em>crime prevention</em> must become a priority for developmental aid.",
        russianWord: "предупреждению преступности",
        russianExample:
          "В целом в рамках помощи в целях развития деятельность по <em>предупреждению преступности</em> на уровне общин должна стать одной из приоритетных задач.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46517959,
        englishWord: "pledge",
        englishExample:
          "We <em>pledge</em> our full support to your leadership.",
        russianWord: "заверяем Вас",
        russianExample:
          "Мы <em>заверяем Вас</em> в том, что будем всячески поддерживать Вас в выполнении Ваших руководящих функций.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46517952,
        englishWord: "pledge",
        englishExample:
          "This time perhaps the <em>pledge</em> will be honoured.",
        russianWord: "обещание",
        russianExample:
          "Впрочем, на этот раз <em>обещание</em>, скорее всего, будет выполнено.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46517918,
        englishWord: "carers",
        englishExample:
          "So that is not only the child but their parents or <em>carers</em>.",
        russianWord: "опекунов",
        russianExample:
          "Это касается не только самого ребенка, но и его родителей, либо <em>опекунов</em>.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46517895,
        englishWord: "suggestion",
        englishExample: "I made this <em>suggestion</em> in 1978.",
        russianWord: "предложение",
        russianExample:
          "Именно такое <em>предложение</em> я подавал в 1978 году.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46516871,
        englishWord: "enormous",
        englishExample:
          "Many renewable energy technologies have <em>enormous</em> potential.",
        russianWord: "огромный",
        russianExample:
          "Многие технологии, основанные на использовании возобновляемых энергоресурсов, таят в себе <em>огромный</em> потенциал.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46516854,
        englishWord: "treble",
        englishExample: "The numbers need to double or <em>treble</em>.",
        russianWord: "утроить",
        russianExample: "Это число необходимо удвоить или <em>утроить</em>.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46516812,
        englishWord: "mend",
        englishExample: "And I have to <em>mend</em> my gate, that he broke.",
        russianWord: "починить",
        russianExample:
          "Ворота, которые он сломал, я должен <em>починить</em>.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46516808,
        englishWord: "mend",
        englishExample:
          "I really think you need to <em>mend</em> fences with your brother.",
        russianWord: "наладить",
        russianExample:
          "Я правда думаю, ты должен <em>наладить</em> отношения с братом.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46516804,
        englishWord: "mend",
        englishExample: "Perhaps it is too broken to <em>mend</em>.",
        russianWord: "исправить",
        russianExample:
          "Вохможно, он уже слишком разбит, что бы что-то <em>исправить</em>.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46516747,
        englishWord: "one-off",
        englishExample: "Besides, it is a <em>one-off</em> product.",
        russianWord: "одноразовый",
        russianExample: "Кроме того, это <em>одноразовый</em> продукт.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46516700,
        englishWord: "vet",
        englishExample:
          "Don't be afraid to properly <em>vet</em> options ahead of time.",
        russianWord: "проверять",
        russianExample:
          'Не бойтесь должным образом <em class="both">проверять</em> варианты заранее.',
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46516682,
        englishWord: "worthwhile",
        englishExample: "I will do something <em>worthwhile</em> tomorrow.",
        russianWord: "стоящее",
        russianExample:
          "Завтра я просто обязан сделать хоть что-то <em>стоящее</em>.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46516554,
        englishWord: "remarkable",
        englishExample: "I'd say it's quite <em>remarkable</em>.",
        russianWord: "примечательно",
        russianExample:
          "ИН: Я бы сказал, что это весьма <em>примечательно</em>.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46516552,
        englishWord: "remarkable",
        englishExample:
          "The park system is a <em>remarkable</em>, <em>remarkable</em> part of our country.",
        russianWord: "замечательных",
        russianExample:
          "«Дальний Восток - одна из <em>замечательных</em> частей нашей страны.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46516540,
        englishWord: "underlying",
        englishExample:
          "Our <em>underlying</em> argument was that secularization and modernity go hand in hand.",
        russianWord: "основной",
        russianExample:
          "Наш <em>основной</em> аргумент заключался в том, что секуляризм и современность идут рука об руку.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46516494,
        englishWord: "generosity",
        englishExample:
          "However, his <em>generosity</em> manifested long before he made his first millions.",
        russianWord: "щедрость",
        russianExample:
          "Однако его <em>щедрость</em> проявилась задолго до того, как он заработал свои первые миллионы.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46370123,
        englishWord: "uplift",
        englishExample:
          "It is certainly needed to <em>uplift</em> you in such difficult times.",
        russianWord: "поднять",
        russianExample:
          'Это, безусловно, необходимо, чтобы <em class="both">поднять</em> вас в такие трудные времена.',
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46370111,
        englishWord: "uplift",
        englishExample:
          "It's a wonderful course if you want to experience camaraderie, history, and emotional <em>uplift</em>.",
        russianWord: "подъем",
        russianExample:
          "Это прекрасный курс, если вы хотите испытать дух товарищества, историю и эмоциональный <em>подъем</em>.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46370107,
        englishWord: "generous",
        englishExample:
          "Thanks for the cheque, surprisingly <em>generous</em> given your problems.",
        russianWord: "щедрый",
        russianExample:
          "Спасибо за чек, на удивление <em>щедрый</em>, учитывая твои собственные проблемы.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46370099,
        englishWord: "solitude",
        englishExample: "Maybe <em>solitude</em> is happiness, for him.",
        russianWord: "одиночество",
        russianExample:
          "Может быть, именно для вас <em>одиночество</em> как раз и является счастьем.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46370095,
        englishWord: "wilderness",
        englishExample:
          "Surviving in the <em>wilderness</em> requires plenty of water.",
        russianWord: "пустыне",
        russianExample:
          "Поддержание жизни любого сада в <em>пустыне</em> требует очень много воды.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46370090,
        englishWord: "wilderness",
        englishExample:
          "People pay thousands to experience <em>wilderness</em> like this.",
        russianWord: "глуши",
        russianExample:
          "Люди платят тысячи, чтобы испытать жизнь в такой <em>глуши</em>.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46370076,
        englishWord: "examine",
        englishExample:
          "Experiments continue worldwide to capture neutrinos and <em>examine</em> their properties.",
        russianWord: "изучить",
        russianExample:
          "Теперь эксперименты продолжаются и во всем мире ведется интенсивная работа для того, чтобы захватить нейтрино и <em>изучить</em> их свойства.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46370071,
        englishWord: "unexamined",
        englishExample:
          "The content of this identity, unsurprisingly, is left <em>unexamined</em> and undefined.",
        russianWord: "неисследованным",
        russianExample:
          "Неудивительно, что содержание этой идентичности остается <em>неисследованным</em> и неопределенным.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46370058,
        englishWord: "heartbreak",
        englishExample:
          "I deeply apologize for the trouble and <em>heartbreak</em> we caused today.",
        russianWord: "горе",
        russianExample:
          "Я глубоко приношу извинения за беспокойство и <em>горе</em>, которые мы причинили сегодня».",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46370046,
        englishWord: "leverage",
        englishExample:
          "Meaning that new investments will introduce and <em>leverage</em> more efficient technologies.",
        russianWord: "использовать",
        russianExample:
          "Это означает, что новые инвестиции будут внедрять и <em>использовать</em> более эффективные технологии.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46370039,
        englishWord: "rebound",
        englishExample:
          "The drawback to the stop loss order is that with the volatile nature of online forex trading there is always a chance that the currencies will <em>rebound</em> quickly.",
        russianWord: "восстанавливаться",
        russianExample:
          'Недостаток порядке стоп-лосс в том, что с нестабильной природы онлайн форекс всегда есть шанс, что валюты будут <em class="both">восстанавливаться</em> быстрее.',
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46370028,
        englishWord: "rebound",
        englishExample:
          "Altogether, he said such measures could help growth <em>rebound</em> next quarter and push annual GDP growth to around 5.7%.",
        russianWord: "восстановлению",
        russianExample:
          "В целом он сказал, что такие меры могут помочь <em>восстановлению</em> роста в следующем квартале и подтолкнуть ежегодный рост ВВП примерно до 5,7%.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46370019,
        englishWord: "rebound",
        englishExample:
          "The current price <em>rebound</em> is beginning to follow some predictable patterns.",
        russianWord: "отскок",
        russianExample:
          "Текущий <em>отскок</em> цен начинает следовать некоторым предсказуемым моделям.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46369988,
        englishWord: "barefoot",
        englishExample: "You were <em>barefoot</em>, he wore clogs.",
        russianWord: "босиком",
        russianExample: "Ты была <em>босиком</em>, а он - в сабо.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46369970,
        englishWord: "obligations",
        englishExample:
          "The distinction between <em>obligations</em> of result, <em>obligations</em> of conduct and <em>obligations</em> of prevention was a valuable one in analytical terms.",
        russianWord: "обязательств",
        russianExample:
          "Разграничение <em>обязательств</em> результата, <em>обязательств</em> поведения и <em>обязательств</em> предупреждения в аналитическом смысле является весьма полезным.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46369956,
        englishWord: "fulfillment",
        englishExample:
          "The second is that joy and <em>fulfillment</em> can seemingly only be found through motherhood.",
        russianWord: "удовлетворение",
        russianExample:
          "Второй заключается в том, что радость и <em>удовлетворение</em>, казалось бы, может быть найден только через материнство.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46369953,
        englishWord: "fulfillment",
        englishExample:
          "This helps you quicker assign tasks and control their <em>fulfillment</em>.",
        russianWord: "выполнение",
        russianExample:
          "В результате становится намного проще и быстрее давать указания, а также контролировать их <em>выполнение</em>.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46369944,
        englishWord: "sense",
        englishExample:
          "The sixth <em>sense</em> is the common <em>sense</em>.",
        russianWord: "чувство",
        russianExample:
          "Шестое <em>чувство</em> это и есть здравый <em>смысл</em>.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46369939,
        englishWord: "sense",
        englishExample: "Exotic supercars are extreme in every <em>sense</em>.",
        russianWord: "смыслах",
        russianExample:
          "Так уж повелось, что экзотические супермашины должны быть экстремальны во всех <em>смыслах</em>.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46369931,
        englishWord: "preciousness",
        englishExample:
          "We learned to treasure the <em>preciousness</em> of life and nurture those who are dear to us.",
        russianWord: "драгоценность",
        russianExample:
          "Мы научились ценить <em>драгоценность</em> жизни и обучать тех, кто дорог нам.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46369930,
        englishWord: "preciousness",
        englishExample:
          "Only after they are gone will we realize their <em>preciousness</em> and feel regret.",
        russianWord: "ценность",
        russianExample:
          "Только после того как они уйдут, мы поймем их <em>ценность</em> и почувствуем сожаление.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46369925,
        englishWord: "to step into",
        englishExample: "You need <em>to step into</em> the role now.",
        russianWord: "вступить в",
        russianExample: "Нужно <em>вступить в</em> должность прямо сейчас.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46369918,
        englishWord: "seduce",
        englishExample: "11 days to <em>seduce</em> a boy.",
        russianWord: "соблазнить",
        russianExample: "И 11 дней на то, чтобы <em>соблазнить</em> парня.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46369907,
        englishWord: "seduction",
        englishExample: "It is personality, confidence and <em>seduction</em>.",
        russianWord: "соблазнение",
        russianExample:
          "Стиль - это личность, уверенность и <em>соблазнение</em>».",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46369902,
        englishWord: "long",
        englishExample:
          "The inconveniences that occur in our way should make us love home and <em>long</em> to be there.",
        russianWord: "стремиться",
        russianExample:
          'Трудности, с которыми мы сталкиваемся на нашем пути, должны заставить нас полюбить дом и <em class="both">стремиться</em> быть там.',
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46369883,
        englishWord: "savor",
        englishExample:
          "We need to <em>savor</em> smaller portions of seafood.",
        russianWord: "наслаждаться",
        russianExample:
          "Нам надо <em>наслаждаться</em> меньшими порциями морепродуктов.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46369855,
        englishWord: "gorgeousness",
        englishExample: "I think they rely on their own <em>gorgeousness</em>.",
        russianWord: "великолепие",
        russianExample: "Думаю, они полагаются на свое <em>великолепие</em>.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46369841,
        englishWord: "breathtaking",
        englishExample:
          "The villas are arranged in an amphitheatric manner along the bay providing for <em>breathtaking</em> sea views from most of the properties.",
        russianWord: "захватывающий",
        russianExample:
          "Виллы расположены в амфитеатральном порядке, вдоль залива для обеспечения <em>захватывающий</em> вид на море из большинства апартаментов.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46341017,
        englishWord: "petrified",
        englishExample: "These <em>petrified</em> trees can be easily seen.",
        russianWord: "окаменелые",
        russianExample: "Эти <em>окаменелые</em> деревья легко можно увидеть.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46341010,
        englishWord: "petrified",
        englishExample: "I was <em>petrified</em>, not believing.",
        russianWord: "окаменел",
        russianExample: "Я <em>окаменел</em>, не веря своим глазам.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46340972,
        englishWord: "earth would swallow me up",
        englishExample:
          "And I just wanted the <em>earth</em> to <em>swallow</em> me <em>up</em>.",
        russianWord: "земля поглотила",
        russianExample:
          "И я хотела чтобы, просто <em>земля поглотила</em> меня.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46304862,
        englishWord: "stare",
        englishExample:
          "Look, almost <em>stare</em>, at him/her without any movement of any part of your body.",
        russianWord: "пялиться",
        russianExample:
          "Посмотрите, почти <em>пялиться</em> на его/ее без какого-либо движения какой-либо части вашего тела.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46304803,
        englishWord: "shaking like",
        englishExample: "I don't know. I was <em>shaking like</em> a leaf.",
        russianWord: "дрожал как",
        russianExample: "Не знаю, я <em>дрожал как</em> банный лист.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46304781,
        englishWord: "over the moon",
        englishExample:
          "I'm obviously <em>over the moon</em> and humbled by this amazing opportunity.",
        russianWord: "на седьмом небе от счастья",
        russianExample:
          "«Я, очевидно, <em>на седьмом небе от счастья</em> и удивления этой удивительной возможности.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46304734,
        englishWord: "At the end of",
        englishExample:
          "<em>At the end of</em> September, a massive earthquake hits Indonesia.",
        russianWord: "в конце",
        russianExample:
          "Напомним, <em>в конце</em> сентября сильное землетрясение произошло в Индонезии.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46304680,
        englishWord: "made my stomach turn",
        englishExample:
          "Martyrs is the first film that <em>made my stomach turn</em> and made me hit fast forward but also in the same token kept me glued to my seat to see what happens next.",
        russianWord: "вызвал холодок в моем животе",
        russianExample:
          "«Мученицы» - первый фильм, который <em>вызвал холодок в моем животе</em> и заставил меня поставить просмотр на ускоренную перемотку, но, также, он сохранял меня приклеенной к моему месту, чтобы увидеть что будет дальше.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46106549,
        englishWord: "cut a dash",
        englishExample:
          'The "priest" of the OCU from Volyn (a defector from the UOC), Viktor Martynenko, believes that all the latest "calendar" rhetoric of Mikhail Zinkevich is plain populism and a desire to <em>cut a dash</em> in the media.',
        russianWord: "засветиться",
        russianExample:
          "«Священник» ПЦУ с Волыни (перебежчик из УПЦ) Виктор Мартыненко считает, что все последние «календарные» заявления Михаила Зинкевича - обычный популизм и желание <em>засветиться</em> в СМИ.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46106438,
        englishWord: "cat burglar",
        englishExample: "No, it was a fearless <em>cat burglar</em>.",
        russianWord: "вор-домушник",
        russianExample: "Нет. Это был отчаянный <em>вор-домушник</em>.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46106358,
        englishWord: "cock of the walk",
        englishExample:
          "Just cattin' around like the <em>cock of the walk</em>. Well, guess what, you skunk?",
        russianWord: "пупом земли",
        russianExample:
          "Просто шляешься по округе, считаешь себя <em>пупом земли</em>, но знаешь что, придурок?",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46106338,
        englishWord: "arrogant",
        englishExample: "You know, I forgot how <em>arrogant</em> you were.",
        russianWord: "высокомерный",
        russianExample:
          "Знаешь, а я уже и забыл какой ты был <em>высокомерный</em>.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46106301,
        englishWord: "rare bird",
        englishExample: "Looks like a <em>rare bird</em> that one.",
        russianWord: "редкая птица",
        russianExample: "Похоже, этот тип - <em>редкая птица</em>.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46106257,
        englishWord: "not born yesterday",
        englishExample:
          "We are not children; we were <em>not born yesterday</em>.",
        russianWord: "не вчера родились",
        russianExample: "Мы не дети, мы <em>не вчера родились</em>.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46106155,
        englishWord: "nerves of steel",
        englishExample: "People who have <em>nerves of steel</em>.",
        russianWord: "стальные нервы",
        russianExample: "Только для тех, у кого <em>стальные нервы</em>.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46106131,
        englishWord: "good for nothing",
        englishExample: "I do everything wrong. I'm <em>good for nothing</em>.",
        russianWord: "никчёмный",
        russianExample:
          "Я всё делаю неправильно. Я <em>никчёмный</em> человек.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46105975,
        englishWord: "fresh as a daisy",
        englishExample:
          "Some of us are as <em>fresh as a daisy</em> despite missing a few hours of sleep, while others struggle.",
        russianWord: "как огурчик",
        russianExample:
          "Некоторые из нас <em>как огурчик</em>, несмотря на отсутствие нескольких часов сна, в то время как другие борются.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46105912,
        englishWord: "old hand",
        englishExample:
          "Are you a newbie or an <em>old hand</em> at the exercise game?",
        russianWord: "ветераном",
        russianExample:
          "Являетесь ли вы новичком или <em>ветераном</em> в области азартных игр?",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46105876,
        englishWord: "fraidy cat",
        englishExample: "I'm a big old <em>fraidy cat</em>.",
        russianWord: "пугливый кот",
        russianExample: "Я большой и старый <em>пугливый кот</em>.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46105225,
        englishWord: "catchy",
        englishExample:
          "Then later after a few approved comments you can try and use a <em>catchy</em> headline instead of your name.",
        russianWord: "броский",
        russianExample:
          "Затем, после нескольких одобренных комментариев, вы можете попытаться использовать <em>броский</em> заголовок вместо вашего имени.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46105180,
        englishWord: "exterior",
        englishExample:
          "We can't say this model has a bright <em>exterior</em>.",
        russianWord: "внешний вид",
        russianExample:
          "Не могу сказать, что у этого моста какой-то необычный <em>внешний вид</em>.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46104990,
        englishWord: "leaf",
        englishExample:
          "Yes, stevia <em>leaf</em> is heavily refined white powder is not.",
        russianWord: "лист",
        russianExample:
          "Да, <em>лист</em> стевии естественный... но сильно очищенный белый порошок - нет.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46104932,
        englishWord: "fascinated",
        englishExample: "I was in it for hours, totally <em>fascinated</em>.",
        russianWord: "очарованный",
        russianExample:
          "Я мог делать это в течение нескольких часов, полностью <em>очарованный</em>.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46104886,
        englishWord: "clap",
        englishExample: "You may <em>clap</em>, I won't be embarrassed.",
        russianWord: "похлопать",
        russianExample: "Можно <em>похлопать</em>, я не обижусь.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46104839,
        englishWord: "awkward",
        englishExample:
          "Otherwise this would have been really <em>awkward</em>.",
        russianWord: "неудобно",
        russianExample:
          "В противном случае, это было бы весьма <em>неудобно</em>.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46104835,
        englishWord: "awkward",
        englishExample:
          "The <em>awkward</em> moment when your neighbour sees you break his fence.",
        russianWord: "неловкий",
        russianExample:
          "Этот <em>неловкий</em> момент, когда ваш сосед видит, что вы сломали его забор.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46104794,
        englishWord: "throw up",
        englishExample: "I actually think I might <em>throw up</em>.",
        russianWord: "вырвать",
        russianExample:
          "Я действительно думаю что меня может <em>вырвать</em>.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46104664,
        englishWord: "out of my wits",
        englishExample:
          "Yes, I was scared <em>out of my wits</em> when you were about to run me down.",
        russianWord: "до чёртиков",
        russianExample:
          "Да, я испугался <em>до чёртиков</em>, когда ты собиралась меня переехать.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46104428,
        englishWord: "endeavour",
        englishExample:
          "Upon receipt of this complaint, the company will <em>endeavour</em> to resolve the matter.",
        russianWord: "пытаться",
        russianExample:
          'Получив жалобу, фонд будет <em class="both">пытаться</em> решить возникшую проблему.',
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46104418,
        englishWord: "endeavour",
        englishExample:
          "Some delegations indicated that they would <em>endeavour</em> to increase their financial contributions to SIAP.",
        russianWord: "усилия",
        russianExample:
          "Несколько делегаций указали на то, что они приложат <em>усилия</em> для увеличения своего финансового взноса в СИАТО.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46104410,
        englishWord: "endeavours",
        englishExample:
          "Our <em>endeavours</em> to clear mine-affected areas should be enhanced.",
        russianWord: "усилия",
        russianExample:
          "И нам следует наращивать свои <em>усилия</em> по расчистке насыщенных минами районов.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46104277,
        englishWord: "struggle",
        englishExample:
          "Then you must <em>struggle</em> against your desire to go roller-skating.",
        russianWord: "бороться",
        russianExample:
          'Тогда вы должны <em class="both">бороться</em> против вашего желания идти кататься на роликовых коньках.',
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 46104270,
        englishWord: "struggle",
        englishExample:
          "This <em>struggle</em> will ultimately make you stronger.",
        russianWord: "борьба",
        russianExample:
          "Эта <em>борьба</em>, в конечном счете, умерит Вас и сделает более сильными.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 45516237,
        englishWord: "buried",
        englishExample:
          "Scientists believe that <em>buried</em> probably had a Mongolian origin.",
        russianWord: "погребенный",
        russianExample:
          "Ученые полагают, что <em>погребенный</em>, вероятно, имел монгольское происхождение.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 45516085,
        englishWord: "get crossed off",
        englishExample: "Another city <em>crossed off</em> my list.",
        russianWord: "вычеркнули из",
        russianExample: "А вот наш город <em>вычеркнули из</em> списка.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 45515860,
        englishWord: "weakly",
        englishExample: "I smiled <em>weakly</em> and prepared to run.",
        russianWord: "робко",
        russianExample:
          'Я <em class="both">робко</em> улыбнулась, готовые выложить.',
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 45515709,
        englishWord: "tray",
        englishExample:
          "A mixed <em>tray</em> of ferns must offer sufficient variety.",
        russianWord: "лоток",
        russianExample:
          "Смешанный <em>лоток</em> папоротников должен иметь достаточное разнообразие.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 45516298,
        englishWord: "slightly",
        englishExample:
          "But when that didn't happen, we were <em>slightly</em> disappointed.",
        russianWord: "немного",
        russianExample:
          "И когда этого не произошло, все, конечно, были <em>немного</em> разочарованы.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 45516238,
        englishWord: "bury",
        englishExample: "What better way to <em>bury</em> the past than...",
        russianWord: "похоронить",
        russianExample:
          "Есть ли способ получше, чтобы <em>похоронить</em> прошлое, чем...",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 45516220,
        englishWord: "apparently",
        englishExample:
          "The anti-corruption mechanisms were <em>apparently</em> not effective.",
        russianWord: "по-видимому",
        russianExample:
          "Механизмы, созданные для борьбы с коррупцией, <em>по-видимому</em>, действуют не эффективно.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 45515915,
        englishWord: "tap water",
        englishExample:
          "All <em>tap water</em> undergoes special treatment and is drinkable.",
        russianWord: "водопроводная вода",
        russianExample:
          "Вся <em>водопроводная вода</em> проходит специальную обработку и является годной для питья.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 45515858,
        englishWord: "weakly",
        englishExample:
          "Teenagers with <em>weakly</em> deformed needs without certain interests.",
        russianWord: "слабо",
        russianExample:
          "Подростки, отличающиеся <em>слабо</em> деформированными потребностями при отсутствии определённых интересов...",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
      {
        id: 45515694,
        englishWord: "convince",
        englishExample: "Only convinced people can <em>convince</em> others.",
        russianWord: "убедить",
        russianExample:
          "Лишь тот, кто искренне убежден в чем-то, может <em>убедить</em> других.",
        association: "",
        groupId: 1684835130652,
        done: false,
        picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
      },
    ]);

    res.json({
      statusCode: 200,
    });
  } catch (error) {
    res.status(500).send(error);
  } finally {
    await client.close();
  }
}
