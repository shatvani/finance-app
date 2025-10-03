export const types = [
  'Income', 'Expense', 'Investment', 'Saving'
]
export const categories = [
  'Housing', 'Transport', 'Health', 'Food', 'Education', 'Other'
]

export const paymentMethods = [
  { value: "cash", label: "Cash", hu: "Készpénz" },
  { value: "credit_card", label: "Credit Card", hu: "Hitelkártya" },
  { value: "debit_card", label: "Debit Card", hu: "Bankkártya" },
  { value: "bank_transfer", label: "Bank Transfer", hu: "Banki átutalás" },
  { value: "mobile_payment", label: "Mobile Payment", hu: "Mobilfizetés" },
  { value: "check", label: "Check", hu: "Csekk" },
  { value: "other", label: "Other", hu: "Egyéb" },
];

export const currencies = [
  { value: "USD", label: "USD - US Dollar", hu: "USD - Amerikai dollár" },
  { value: "EUR", label: "EUR - Euro", hu: "EUR - Euro" },
  { value: "GBP", label: "GBP - British Pound", hu: "GBP - Brit font" },
  { value: "HUF", label: "HUF - Hungarian Forint", hu: "HUF - Magyar forint" },
  { value: "JPY", label: "JPY - Japanese Yen", hu: "JPY - Japán jen" },
  { value: "CNY", label: "CNY - Chinese Yuan", hu: "CNY - Kínai jüan" },
  { value: "INR", label: "INR - Indian Rupee", hu: "INR - Indiai rúpia" },
  { value: "AUD", label: "AUD - Australian Dollar", hu: "AUD - Ausztrál dollár" },
  { value: "CAD", label: "CAD - Canadian Dollar", hu: "CAD - Kanadai dollár" },
  { value: "CHF", label: "CHF - Swiss Franc", hu: "CHF - Svájci frank" },
];

export const recurrenceOptions = [
  { value: "none", label: "None", hu: "Nincs" },
  { value: "daily", label: "Daily", hu: "Napi" },
  { value: "weekly", label: "Weekly", hu: "Heti" },
  { value: "monthly", label: "Monthly", hu: "Havi" },
  { value: "yearly", label: "Yearly", hu: "Éves" },
];

export const budgetPeriods = [
  { value: "weekly", label: "Weekly", hu: "Heti" },
  { value: "monthly", label: "Monthly", hu: "Havi" },
  { value: "yearly", label: "Yearly", hu: "Éves" },
];

export const defaultCurrency = "HUF"; 
export const defaultLocale = "en";
export const supportedLocales = ["en", "hu"];

export const localeNames = {
  en: "English",
  hu: "Magyar",
};

export const localeFlags = {
  en: "🇺🇸",
  hu: "🇭🇺",
};

export const dateFormats = {
  en: { year: 'numeric', month: 'long', day: 'numeric' },
  hu: { year: 'numeric', month: 'long', day: 'numeric' },
};

export const timeFormats = {
  en: { hour: '2-digit', minute: '2-digit' },
  hu: { hour: '2-digit', minute: '2-digit' },
};

export const dateTimeFormats = {
  en: { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' },
  hu: { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' },
};

export const currencyFormats = {
  en: { style: 'currency', currency: 'USD' },
  hu: { style: 'currency', currency: 'HUF' },
};

export const numberFormats = {
  en: { minimumFractionDigits: 2, maximumFractionDigits: 2 },
  hu: { minimumFractionDigits: 2, maximumFractionDigits: 2 },
};

export const defaultBudgetAmount = 1000;
export const defaultBudgetPeriod = "monthly";

export const maxTransactionAmount = 1000000; // 1 million
export const minTransactionAmount = 0.01; // 1 cent

export const maxBudgetAmount = 10000000; // 10 million
export const minBudgetAmount = 1; // 1 unit 
export const maxNoteLength = 500; // 500 characters
export const maxCategoryLength = 50;
export const maxPaymentMethodLength = 50;
export const maxCurrencyLength = 10;

export const apiRateLimit = 100;
export const apiTimeout = 5000; // 5 seconds

export const sessionTimeout = 30 * 60 * 1000; // 30 minutes
export const tokenExpiration = 60 * 60 * 1000; // 1 hour

export const itemsPerPage = 20;
export const maxItemsPerPage = 100;

export const datePickerStartOfWeek = {
  en: 0, // Sunday
  hu: 1, // Monday
};

export const datePickerLocale = {
  en: 'en-US',
  hu: 'hu-HU',
};

export const timePickerLocale = {
  en: 'en-US',
  hu: 'hu-HU',
};

export const currencySymbols = {
  USD: "$",
  EUR: "€",
  GBP: "£",
  HUF: "Ft",
  JPY: "¥",
  CNY: "¥",
  INR: "₹",
  AUD: "$",
  CAD: "$",
  CHF: "CHF",
};

export const defaultDateFormat = "MM/dd/yyyy";
export const defaultTimeFormat = "HH:mm";
export const defaultDateTimeFormat = "MM/dd/yyyy HH:mm";

export const dateFormatOptions = [
  { value: "MM/dd/yyyy", label: "MM/DD/YYYY", hu: "MM/DD/YYYY" },
  { value: "dd/MM/yyyy", label: "DD/MM/YYYY", hu: "DD/MM/YYYY" },
  { value: "yyyy-MM-dd", label: "YYYY-MM-DD", hu: "YYYY-MM-DD" },
];

export const timeFormatOptions = [
  { value: "HH:mm", label: "24-hour (HH:mm)", hu: "24 órás (HH:mm)" },
  { value: "hh:mm a", label: "12-hour (hh:mm AM/PM)", hu: "12 órás (hh:mm AM/PM)" },
];

export const dateTimeFormatOptions = [
  { value: "MM/dd/yyyy HH:mm", label: "MM/DD/YYYY HH:mm", hu: "MM/DD/YYYY HH:mm" },
  { value: "dd/MM/yyyy HH:mm", label: "DD/MM/YYYY HH:mm", hu: "DD/MM/YYYY HH:mm" },
  { value: "yyyy-MM-dd HH:mm", label: "YYYY-MM-DD HH:mm", hu: "YYYY-MM-DD HH:mm" },
  { value: "MM/dd/yyyy hh:mm a", label: "MM/DD/YYYY hh:mm AM/PM", hu: "MM/DD/YYYY hh:mm AM/PM" },
  { value: "dd/MM/yyyy hh:mm a", label: "DD/MM/YYYY hh:mm AM/PM", hu: "DD/MM/YYYY hh:mm AM/PM" },
  { value: "yyyy-MM-dd hh:mm a", label: "YYYY-MM-DD hh:mm AM/PM", hu: "YYYY-MM-DD hh:mm AM/PM" },
];

export const supportedCurrencies = [
  "USD", "EUR", "GBP", "HUF", "JPY", "CNY", "INR", "AUD", "CAD", "CHF"
];

export const defaultSettings = {
  locale: defaultLocale,
  currency: defaultCurrency,
  dateFormat: defaultDateFormat,
  timeFormat: defaultTimeFormat,
  dateTimeFormat: defaultDateTimeFormat,
};

export const themes = [
  { value: "light", label: "Light", hu: "Világos" },
  { value: "dark", label: "Dark", hu: "Sötét" },
  { value: "system", label: "System", hu: "Rendszer" },
];

export const defaultTheme = "system";