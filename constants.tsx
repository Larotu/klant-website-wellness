
import { Service, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Over ons', href: '#over-ons' },
  { label: 'Behandelingen', href: '#behandelingen' },
  { label: 'Waarom ons', href: '#waarom' },
];

export const SERVICES: Service[] = [
  {
    id: '01',
    title: 'Medisch & Esthetisch',
    subtitle: 'De complete behandeling',
    description: 'Onze signatuurbehandeling. Wij beginnen met een grondige analyse van uw voeten, gevolgd door het professioneel verwijderen van eelt, likdoorns en het verzorgen van de nagels. We sluiten af met een korte, ontspannende voetmassage.',
    price: '€ 45,00',
    features: ['Desinfectie & Analyse', 'Nagelverzorging & Eeltverwijdering', 'Incrèmen & Korte Massage'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi-DJhPvvWOT5-ej6RfkRrD0hP-jeVjfzlIzi-RSEehyKZQng0_Y8NQsnjPC-qjaHUv578_9BDh01OlA3uLSyGBuvWCzHAeWB5D8iYDmeCZMOrVLSrCB6gzfIDn2JlgykEy43qO30jNSJqsqOQ02Zp7OcpiWynNunVY7D7JBKuOVy_kJCo-KRs0Jtz-yf1HLYnWdwiUCStdoo7uppuU0zcCGpKdAGsh3X2c9qwMbme6QplIigQ8y0pmwdlepDALQQjNN2eXJGurjI'
  },
  {
    id: '02',
    title: 'Medisch Basis',
    subtitle: 'Functioneel herstel',
    description: 'Gerichte behandeling voor specifieke voetklachten. Ideaal voor het verhelpen van ingegroeide nagels, likdoorns of overtollig eelt zonder cosmetische toevoegingen.',
    price: '€ 35,00',
    features: ['Anamnese & Advies', 'Behandeling Specifieke Klacht', 'Nagelomgeving Reinigen'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTUXbavNgAQdkYx_QX4ga8EJuNUlQhRSmpkgWvNmI4QSC8upHU97M07fSfV0DxRJjp-kM0w2lwJXykvW-VJ2EHL0eJmDp9MyAFHMqtmYv9ev1pPrxIwp0jlwh-W3bVxB-t6fNbWCxM_xrNxdiprC79TS7IB0JuXszmgbQLSgTndg8iqkzhFo4DGzKgY-XdunkoQMqmSx42z7T3evgYz8jqcNxEm7swMU7jxIokUduOLHxMrHFMzbulYdedcq-rnNWwoiA4J27yFNI'
  },
  {
    id: '03',
    title: 'Spa & Wellness',
    subtitle: 'Pure ontspanning',
    description: 'Een weldaad voor lichaam en geest. Naast de basisverzorging geniet u van een scrub, een voetenmasker en een uitgebreide voet- en onderbeenmassage.',
    price: '€ 65,00',
    features: ['Voetenbad & Scrub', 'Verzorgend Masker', 'Uitgebreide Massage (20 min)'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlV4uGg3Eow0I7Kah4V5roEFhKF559iqH9h6nbW1f4mbCUEmNopfhFUySe8ont5U4mMW6u07HHp6RtularSCEkSsqxWNFNwW4R6tE1qU7rTz23NI8y1HI6UrpDH6WDtYwI1K__yAvPqie51rgs0snJCtVv6RSCrDSKN_9uNxoDTZqEl8Wo9D1DDA3ge-eA03P8mbD9PXoA5BWxGakJCId-x_PID0cogpL0nILVRFCSpQy6SO1qWDQce5UpfQ_NPbBW20fq39sOgdE'
  }
];
