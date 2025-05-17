
import { StyleProfile, Outfit } from '../types';

export const generateDemoProfile = (occupation: string, hasPhoto: string | null): StyleProfile => {
  // Generate a style profile based on user input
  let mainStyle = '';
  let tags: string[] = [];
  let colorPalette: string[] = [];
  let suitableSilhouettes: string[] = [];
  
  // Basic logic to determine style based on occupation
  if (occupation.includes('Офис') || occupation.includes('офис')) {
    mainStyle = 'Современный деловой стиль';
    tags = ['минимализм', 'классика', 'элегантность', 'бизнес-кэжуал'];
    colorPalette = ['#2C3E50', '#34495E', '#7F8C8D', '#ECF0F1', '#3498DB'];
    suitableSilhouettes = ['Прямой силуэт', 'Приталенный крой', 'Структурированные плечи', 'Средняя длина'];
  } 
  else if (occupation.includes('Творче') || occupation.includes('творче')) {
    mainStyle = 'Креативный кэжуал';
    tags = ['эклектика', 'бохо', 'артистичность', 'самовыражение'];
    colorPalette = ['#8E44AD', '#9B59B6', '#2ECC71', '#F39C12', '#E74C3C'];
    suitableSilhouettes = ['Свободный крой', 'Асимметрия', 'Многослойность', 'Оверсайз'];
  }
  else if (occupation.includes('Свобод') || occupation.includes('свобод')) {
    mainStyle = 'Современный кэжуал';
    tags = ['комфорт', 'функциональность', 'универсальность', 'smart casual'];
    colorPalette = ['#2980B9', '#3498DB', '#1ABC9C', '#BDC3C7', '#7F8C8D'];
    suitableSilhouettes = ['Полуприлегающий силуэт', 'Прямой крой', 'Комфортная посадка', 'Регулируемая длина'];
  }
  else if (occupation.includes('Студент') || occupation.includes('студент')) {
    mainStyle = 'Городской кэжуал';
    tags = ['молодежный стиль', 'практичность', 'многослойность', 'спорт-шик'];
    colorPalette = ['#E74C3C', '#3498DB', '#2ECC71', '#F1C40F', '#34495E'];
    suitableSilhouettes = ['Расслабленный крой', 'Многослойность', 'Оверсайз', 'Укороченный верх'];
  }
  else {
    mainStyle = 'Универсальный смарт-кэжуал';
    tags = ['базовый гардероб', 'универсальность', 'комфорт', 'практичность'];
    colorPalette = ['#2C3E50', '#3498DB', '#2ECC71', '#ECF0F1', '#95A5A6'];
    suitableSilhouettes = ['Прямой силуэт', 'Полуприлегающий крой', 'Классические линии', 'Средняя длина'];
  }
  
  // Add some randomness to recommendations
  if (Math.random() > 0.5) {
    tags.push('сезонный акцент');
  }
  
  if (Math.random() > 0.7) {
    colorPalette.push('#D35400');
  }
  
  // If no photo was provided, add a note about that
  if (!hasPhoto) {
    tags.push('рекомендации без фото');
  }
  
  return {
    mainStyle,
    tags,
    colorPalette,
    suitableSilhouettes,
    bodyCharacteristics: hasPhoto ? 'Рекомендации созданы с учётом вашей фотографии' : undefined
  };
};

export const generateDemoOutfits = (occupation: string, activities: string, goals: string): Outfit[] => {
  const outfits: Outfit[] = [];
  
  // Helper function to create an outfit
  const createOutfit = (
    id: number, 
    title: string, 
    description: string, 
    occasion: string,
    items: { type: 'top' | 'bottom' | 'shoes' | 'accessory'; name: string; description: string }[]
  ): Outfit => {
    return {
      id,
      title,
      description,
      occasion,
      items
    };
  };
  
  // Generate different outfits based on occupation
  if (occupation.includes('Офис') || occupation.includes('офис')) {
    // Office-appropriate outfits
    outfits.push(
      createOutfit(
        1,
        'Деловой комплект с блейзером',
        'Идеальный баланс профессионализма и современного стиля для важных встреч и презентаций.',
        'Для рабочих встреч и презентаций',
        [
          { type: 'top', name: 'Базовая блуза', description: 'Белая шёлковая блуза с V-образным вырезом' },
          { type: 'top', name: 'Приталенный блейзер', description: 'Тёмно-синий блейзер с тонкой структурой' },
          { type: 'bottom', name: 'Классические брюки', description: 'Брюки со стрелками в тон блейзера' },
          { type: 'shoes', name: 'Лодочки на среднем каблуке', description: 'Бежевые кожаные туфли с заострённым носком' },
          { type: 'accessory', name: 'Минималистичные серьги', description: 'Геометрические золотые серьги' },
        ]
      ),
      createOutfit(
        2,
        'Современный офисный стиль',
        'Элегантный и комфортный образ для повседневной работы в офисе.',
        'Для повседневной работы в офисе',
        [
          { type: 'top', name: 'Рубашка-оверсайз', description: 'Голубая хлопковая рубашка свободного кроя' },
          { type: 'bottom', name: 'Прямые брюки с высокой посадкой', description: 'Брюки из плотной ткани бежевого цвета' },
          { type: 'shoes', name: 'Кожаные лоферы', description: 'Чёрные лоферы с минималистичным дизайном' },
          { type: 'accessory', name: 'Кожаный ремень', description: 'Тонкий ремень с металлической пряжкой' },
        ]
      )
    );
  }
  
  // Add some universal outfits
  outfits.push(
    createOutfit(
      3,
      'Кэжуал на выходные',
      'Комфортный и стильный комплект для прогулок и встреч с друзьями.',
      'Для выходных и прогулок',
      [
        { type: 'top', name: 'Базовая футболка', description: 'Белая футболка из органического хлопка' },
        { type: 'top', name: 'Джинсовая куртка', description: 'Светло-голубая куртка классического кроя' },
        { type: 'bottom', name: 'Джинсы прямого кроя', description: 'Тёмно-синие джинсы с высокой посадкой' },
        { type: 'shoes', name: 'Белые кеды', description: 'Минималистичные кожаные кеды' },
        { type: 'accessory', name: 'Небольшая сумка через плечо', description: 'Сумка из мягкой кожи бежевого цвета' },
      ]
    ),
    createOutfit(
      4,
      'Элегантный вечерний образ',
      'Утончённый комплект для ужина в ресторане или культурного мероприятия.',
      'Для вечерних мероприятий',
      [
        { type: 'top', name: 'Шёлковый топ', description: 'Топ на тонких бретелях тёмно-изумрудного цвета' },
        { type: 'bottom', name: 'Юбка-миди', description: 'Плиссированная юбка чёрного цвета' },
        { type: 'shoes', name: 'Босоножки на каблуке', description: 'Минималистичные босоножки с ремешками' },
        { type: 'accessory', name: 'Серьги-подвески', description: 'Длинные серьги с кристаллами' },
      ]
    ),
    createOutfit(
      5,
      'Спорт-шик',
      'Стильный и функциональный образ, сочетающий элементы спортивного и городского стиля.',
      'Для активного отдыха и неформальных встреч',
      [
        { type: 'top', name: 'Свитшот', description: 'Серый свитшот из мягкого хлопка оверсайз' },
        { type: 'bottom', name: 'Трикотажные брюки', description: 'Тёмно-синие брюки с эластичным поясом' },
        { type: 'shoes', name: 'Кроссовки', description: 'Трендовые кроссовки в минималистичном дизайне' },
        { type: 'accessory', name: 'Рюкзак', description: 'Компактный городской рюкзак из нейлона' },
      ]
    ),
    createOutfit(
      6,
      'Монохромный образ',
      'Элегантный образ в одной цветовой гамме для особых случаев.',
      'Для ужинов и культурных мероприятий',
      [
        { type: 'top', name: 'Трикотажный джемпер', description: 'Тонкий джемпер кремового цвета с V-образным вырезом' },
        { type: 'bottom', name: 'Брюки прямого кроя', description: 'Брюки из струящейся ткани в тон джемперу' },
        { type: 'shoes', name: 'Замшевые ботильоны', description: 'Бежевые ботильоны на устойчивом каблуке' },
        { type: 'accessory', name: 'Минималистичное колье', description: 'Тонкое золотое колье с подвеской' },
      ]
    ),
    createOutfit(
      7,
      'Многослойный образ для прохладной погоды',
      'Комфортный и функциональный комплект для межсезонья.',
      'Для прогулок в прохладную погоду',
      [
        { type: 'top', name: 'Базовый лонгслив', description: 'Лонгслив из хлопка графитового цвета' },
        { type: 'top', name: 'Кардиган оверсайз', description: 'Объёмный кардиган крупной вязки бежевого цвета' },
        { type: 'bottom', name: 'Зауженные джинсы', description: 'Тёмно-синие джинсы скинни' },
        { type: 'shoes', name: 'Ботинки челси', description: 'Кожаные ботинки на низком ходу' },
        { type: 'accessory', name: 'Объёмный шарф', description: 'Мягкий шарф в клетку пастельных тонов' },
      ]
    ),
    createOutfit(
      8,
      'Летний городской образ',
      'Лёгкий и практичный комплект для жаркой погоды в городе.',
      'Для летних прогулок по городу',
      [
        { type: 'top', name: 'Льняная рубашка', description: 'Рубашка свободного кроя из лёгкого льна песочного цвета' },
        { type: 'bottom', name: 'Шорты-бермуды', description: 'Хлопковые шорты длиной до колена оливкового цвета' },
        { type: 'shoes', name: 'Эспадрильи', description: 'Тканевые эспадрильи молочного цвета' },
        { type: 'accessory', name: 'Соломенная шляпа', description: 'Шляпа-федора из натуральной соломки' },
      ]
    ),
    createOutfit(
      9,
      'Базовый повседневный образ',
      'Универсальный комплект для повседневных дел и встреч.',
      'Для повседневных дел',
      [
        { type: 'top', name: 'Джемпер из тонкой шерсти', description: 'Облегающий джемпер тёмно-синего цвета' },
        { type: 'bottom', name: 'Прямые джинсы', description: 'Классические джинсы синего цвета' },
        { type: 'shoes', name: 'Замшевые ботинки', description: 'Коричневые ботинки на шнуровке' },
        { type: 'accessory', name: 'Кожаный браслет', description: 'Плетёный браслет в несколько оборотов' },
      ]
    ),
    createOutfit(
      10,
      'Образ для особого случая',
      'Элегантный и запоминающийся комплект для важных событий.',
      'Для праздников и торжественных мероприятий',
      [
        { type: 'top', name: 'Блуза с декоративными деталями', description: 'Чёрная блуза с объёмными рукавами и декоративным воротником' },
        { type: 'bottom', name: 'Юбка-карандаш', description: 'Юбка-карандаш длиной ниже колена с высокой посадкой' },
        { type: 'shoes', name: 'Туфли на каблуке', description: 'Элегантные туфли с острым носком и устойчивым каблуком' },
        { type: 'accessory', name: 'Клатч', description: 'Компактный клатч с металлическим декором' },
      ]
    )
  );
  
  // Randomize order
  return outfits.sort(() => Math.random() - 0.5);
};
