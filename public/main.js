function getNumberWithOrdinal(number) {
  const ordinal = ['th', 'st', 'nd', 'rd'];
  const value = number % 100;
  return number + (ordinal[(value - 20) % 10] || ordinal[value] || ordinal[0]);
}

new Vue({
  el: '#advent-calendar-app',
  computed: {
    backgroundImage: function () {
      return `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${this.backgroundImageUrl}')`;
    },
  },
  data: function () {
    return {
      displayAdventCalendarDescription: true,
      backgroundImageUrl: './assets/images/christmas.jpg',

      isDialogOpen: false,
      dialogTitle: '',
      dialogBody: '',

      visitedCalendarDays: {},
      calendarDays: [{
          dateOrdinal: getNumberWithOrdinal(1),
          dateQuote: 'Lorem ipsum dolor sit amet, liber graeci consulatu ea vel.',
        },
        {
          dateOrdinal: getNumberWithOrdinal(2),
          dateQuote: 'Ex vel quis possit sadipscing.',
        },
        {
          dateOrdinal: getNumberWithOrdinal(3),
          dateQuote: 'Euismod quaestio consequat ad quo, id sea aliquid convenire.',
        },
        {
          dateOrdinal: getNumberWithOrdinal(4),
          dateQuote: 'An sed primis blandit, in est detraxit suavitate.',
        },
        {
          dateOrdinal: getNumberWithOrdinal(5),
          dateQuote: 'Mea ex audiam deleniti, ius dicta everti ullamcorper at, erant melius est in.',
        },
        {
          dateOrdinal: getNumberWithOrdinal(6),
          dateQuote: 'Stet aliquip eam no, te paulo insolens duo, mea congue consectetuer ne.',
        },
        {
          dateOrdinal: getNumberWithOrdinal(7),
          dateQuote: 'Mei dictas constituto te, tamquam consulatu honestatis no vix.',
        },
        {
          dateOrdinal: getNumberWithOrdinal(8),
          dateQuote: 'Amet commodo vix ad, eu decore oblique impedit duo.',
        },
        {
          dateOrdinal: getNumberWithOrdinal(9),
          dateQuote: 'Ut labore omnium usu.',
        },
        {
          dateOrdinal: getNumberWithOrdinal(10),
          dateQuote: 'Pri probo deleniti reformidans ad.',
        },
        {
          dateOrdinal: getNumberWithOrdinal(11),
          dateQuote: 'Etiam option te per, at mundi singulis salutatus sed.',
        },
        {
          dateOrdinal: getNumberWithOrdinal(12),
          dateQuote: 'Pri oportere necessitatibus ad.',
        },
        {
          dateOrdinal: getNumberWithOrdinal(13),
          dateQuote: 'Omnis quodsi aliquando ad mea, quas insolens expetendis nec cu, decore virtute ei has.',
        },
        {
          dateOrdinal: getNumberWithOrdinal(14),
          dateQuote: 'Eirmod convenire qui et, usu impetus admodum et.',
        },
        {
          dateOrdinal: getNumberWithOrdinal(15),
          dateQuote: 'Sed ignota mediocrem at, in sit agam atqui consectetuer.',
        },
        {
          dateOrdinal: getNumberWithOrdinal(16),
          dateQuote: 'Magna diceret forensibus nam ut.',
        },
        {
          dateOrdinal: getNumberWithOrdinal(17),
          dateQuote: 'Unum magna etiam his an.',
        },
        {
          dateOrdinal: getNumberWithOrdinal(18),
          dateQuote: 'Ei audire electram dissentiet qui, cum cu inimicus vulputate.',
        },
        {
          dateOrdinal: getNumberWithOrdinal(19),
          dateQuote: 'Aeque eleifend no quo, veri explicari eam eu.',
        },
        {
          dateOrdinal: getNumberWithOrdinal(20),
          dateQuote: 'Ne per timeam feugiat alienum, an nam partem dictas delicatissimi.',
        },
        {
          dateOrdinal: getNumberWithOrdinal(21),
          dateQuote: 'Constituam mediocritatem an nec.',
        },
        {
          dateOrdinal: getNumberWithOrdinal(22),
          dateQuote: 'Vis quis dicta nihil et, quo meliore argumentum et.',
        },
        {
          dateOrdinal: getNumberWithOrdinal(23),
          dateQuote: 'Nam in dolores salutatus, tale dicam conceptam ut eum.',
        },
        {
          dateOrdinal: getNumberWithOrdinal(24),
          dateQuote: 'Ei has primis voluptaria.',
        },
      ],
    };
  },
  created: function () {
    this.loadConfig();
  },
  methods: {
    loadConfig: function () {
      fetch('./config.json')
        .then((response) => {
          return response.json();
        })
        .then((config) => {
          console.log(config.backgroundImageUrl);

          this.backgroundImageUrl = config.backgroundImageUrl;
          this.displayAdventCalendarDescription = config.displayAdventCalendarDescription;

          const adventCalendarQuotes = config.adventCalendarQuotes;
          adventCalendarQuotes.forEach((quote, index) => {
            const calendarDay = this.calendarDays[index];
            if (calendarDay) {
              calendarDay.dateQuote = quote;
            }
          })
        })
        .catch(() => console.error('Could not find config.json. Website will fallback to default config.'));
    },
    openDialog: function (dateOrdinal, dialogBody) {
      document.body.classList.add('dialog-open');
      this.isDialogOpen = true;
      this.dialogTitle = `${dateOrdinal} december`;
      this.dialogBody = dialogBody;

      const isDateOrdinalVisited = this.visitedCalendarDays[dateOrdinal]
      if (!isDateOrdinalVisited) {
        console.log(this.visitedCalendarDays);
        this.visitedCalendarDays[dateOrdinal] = true;
      }
    },
    closeDialog: function () {
      document.body.classList.remove('dialog-open');
      this.isDialogOpen = false;
      this.dialogTitle = '';
      this.dialogBody = '';
    },
  },
});