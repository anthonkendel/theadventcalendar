function getNumberWithOrdinal(n) {
  var s = ["th", "st", "nd", "rd"],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

new Vue({
  el: '#advent-calendar-app',
  data: function () {
    return {
      calendarDays: [{
          dateOrdinal: getNumberWithOrdinal(1),
        },
        {
          dateOrdinal: getNumberWithOrdinal(2),
        },
        {
          dateOrdinal: getNumberWithOrdinal(3),
        },
        {
          dateOrdinal: getNumberWithOrdinal(4),
        },
        {
          dateOrdinal: getNumberWithOrdinal(5),
        },
        {
          dateOrdinal: getNumberWithOrdinal(6),
        },
        {
          dateOrdinal: getNumberWithOrdinal(7),
        },
        {
          dateOrdinal: getNumberWithOrdinal(8),
        },
        {
          dateOrdinal: getNumberWithOrdinal(9),
        },
        {
          dateOrdinal: getNumberWithOrdinal(10),
        },
        {
          dateOrdinal: getNumberWithOrdinal(11),
        },
        {
          dateOrdinal: getNumberWithOrdinal(12),
        },
        {
          dateOrdinal: getNumberWithOrdinal(13),
        },
        {
          dateOrdinal: getNumberWithOrdinal(14),
        },
        {
          dateOrdinal: getNumberWithOrdinal(15),
        },
        {
          dateOrdinal: getNumberWithOrdinal(16),
        },
        {
          dateOrdinal: getNumberWithOrdinal(17),
        },
        {
          dateOrdinal: getNumberWithOrdinal(18),
        },
        {
          dateOrdinal: getNumberWithOrdinal(19),
        },
        {
          dateOrdinal: getNumberWithOrdinal(20),
        },
        {
          dateOrdinal: getNumberWithOrdinal(21),
        },
        {
          dateOrdinal: getNumberWithOrdinal(22),
        },
        {
          dateOrdinal: getNumberWithOrdinal(23),
        },
        {
          dateOrdinal: getNumberWithOrdinal(24),
        }
      ],
    };
  },
});