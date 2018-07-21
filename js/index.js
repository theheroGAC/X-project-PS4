var ICON_SIZE = 150;
var PADDING = 20;
var model = {
  cursor: {
    x: 0,
    y: 0
  },
  columns: {
    "HEN": {
      index: 0,
      title: "HEN",
      selectedIndex: 0,
      active: false,
      icon: 'gamepad',
      items: [{ title: "VTXHEN", subtitle: "1.7(xVortex)", active: false, icon: "lock", expage: "payloads/vtxhen.html" },{ title: "MIRAHEN", subtitle: "1.7(OpenOrbisTeam)", active: false, icon: "apps", expage: "payloads/mirahen.html" }, { title: "MIRA", subtitle: "Kernel_Logging", active: false, icon: "nfc", expage: "payloads/mira.html" }, { title: "BINLOADER", subtitle: "PORT:9020", active: false, icon: "send", expage: "payloads/binloader.html" }, { title: "MIRAHEN+BINLOADER", subtitle: "1.7(OpenOrbisTeam)", active: false, icon: "input", expage: "payloads/mirabin.html" }]
    },
    "BLOCK": {
      index: 1,
      title: "BLOCK",
      selectedIndex: 0,
      active: false,
      icon: "security",
      items: [{ title: "BLOCKER+FTP", subtitle: "1.3", active: false, icon: "block", expage: "payloads/block.html"  }, { title: "UNBLOCKER", subtitle: "1.0", active: false, icon: "undo", expage: "payloads/unblock.html" }, { title: "BLOCK_EX", subtitle: "1.0(Lightningmods)", active: false, icon: "language", expage: "payloads/blockEX.html" }, { title: "UNBLOCK_EX", subtitle: "1.0(Lightningmods)", active: false, icon: "sync_disabled", expage: "payloads/unblockEX.html" }]
    },
    "LINUX": {
      index: 2,
      title: "LINUX",
      selectedIndex: 0,
      active: false,
      icon: "laptop",
      items: [{ title: "LINUX", subtitle: "1.0(EEPLY)", active: false, icon: "camera", expage: "payloads/eeplinuxloader.html"}, { title: "LINUX", subtitle: "1.0(Vultra)", active: false, icon: "keyboard", expage: "payloads/linux.html"}, { title: "KEXEC", subtitle: "1.0(ValentineBreize)", active: false, icon: "widgets", expage: "payloads/kexec.html"}]
    },
    "BACKUP": {
      index: 3,
      title: "BACKUP",
      selectedIndex: 0,
      active: false,
      icon: "backup",
      items: [{ title: "VTXDUMP", subtitle: "1.8(xVortex)", active: false, icon: "archive", expage: "payloads/vtxdump.html"}, { title: "DB_SG", subtitle: "3.0(Stooged)", active: false, icon: "save", expage: "payloads/dbsg.html" }, { title: "APPTOUSB", subtitle: "3.0(Stooged)", active: false, icon: "storage", expage: "payloads/apptousb.html"}, { title: "APPTOUSB_ALT", subtitle: "1.0(Jakkal)", active: false, icon: "dns", expage: "payloads/apptousb1alt.html"}, { title: "USB_FPKG", subtitle: "1.1b(Specialfood)", active: false, icon: "usb", expage: "payloads/usbfpkgs.html" }]
    },
    "SYSTEM": {
      index: 4,
      title: "SYSTEM",
      selectedIndex: 0,
      active: false,
      icon: "home",
	  items: [{ title: "KERNELDUMP", subtitle: "4.05~5.05(CelesteBlue)", active: false, icon: "memory", expage: "payloads/kdump.html" }, { title: "KERNELDUMPER", subtitle: "2.0(Stooged)", active: false, icon: "work", expage: "payloads/kdumper.html" }, { title: "FS_DUMPER", subtitle: "1.0(Stooged)", active: false, icon: "pageview", expage: "payloads/fsdumper.html" }]
	},
  "TOOLS": {
      index: 5,
      title: "TOOLS",
      selectedIndex: 0,
      active: false,
      icon: "settings",
      items: [{ title: "VR_ENABLER", subtitle: "1.0(Stooged)", active: false, icon: "visibility", expage: "payloads/vr.html" }, { title: "VTXFTP", subtitle: "1.3(xVortex)", active: false, icon: "wifi", expage: "payloads/vtxftp.html" }, { title: "FTP+R/W", subtitle: "1.0(Lightningmods)", active: false, icon: "warning", expage: "payloads/ftprw.html" }, { title: "REACTPSPLUS", subtitle: "2012(Zer0xFF)", active: false, icon: "restore", expage: "payloads/react.html" }, { title: "UNREACTPSPLUS", subtitle: "2018(Zer0xFF)", active: false, icon: "update", expage: "payloads/unreact.html" }, { title: "REACTPSPLUS", subtitle: "Moddable(Zer0xFF)", active: false, icon: "timelapse", expage: "payloads/reactloader.html" }]
    },
	"CHEATS": {
      index: 6,
      title: "CHEATS",
      selectedIndex: 0,
      active: false,
      icon: "search",
      items: [{ title: "PS4TRAINER", subtitle: "1.3.41.58(Tylermods)", active: false, icon: "code", expage: "payloads/tylermods.html" }, { title: "JKPATCH", subtitle: "1.0(XEMIO)", active: false, icon: "timeline", expage: "payloads/jkpatch.html" }, { title: "DeathRGH", subtitle: "1.6(DeathRGH)", active: false, icon: "attachment", expage: "payloads/deathrgh.html" }, { title: "PS4CHEATER", subtitle: "1.4.5(Chendochap)", active: false, icon: "create", expage: "payloads/cheater.html" }, { title: "PS4API", subtitle: "1.0(Helloitu)", active: false, icon: "flag", expage: "payloads/ps4api.html" }]
    },
  "MENUS": {
      index: 7,
      title: "MENUS",
      selectedIndex: 0,
      active: false,
      icon: "tune",
      items: [{ title: "APII_INTENSE_EU_1.27", subtitle: "2.0(EROOTIIK)", active: false, icon: "build", expage: "payloads/intense127loader.html" }, { title: "LAMANCE_1.27", subtitle: "0.8(David1337hax)", active: false, icon: "accessibility", expage: "payloads/lamance127loader.html" }, { title: "LAMANCE", subtitle: "0.8(David1337hax)", active: false, icon: "stars", expage: "payloads/lamanceloader.html" }, { title: "PSYC0S", subtitle: "1.0(AlFaMoDz)", active: false, icon: "grade", expage: "payloads/psyc0sloader.html" }, { title: "APII_INTENSE", subtitle: "1.1(EROOTIIK)", active: false, icon: "extension", expage: "payloads/intenseloader.html" }, { title: "WILDEMODZ", subtitle: "1.1(Wildemodz)", active: false, icon: "toys", expage: "payloads/wildemodzloader.html" }, { title: "TRAINER", subtitle: "1.0(David1337hax)", active: false, icon: "shop", expage: "payloads/trainerloader.html" }, { title: "NOTANOTHER", subtitle: "1.0(David1337hax)", active: false, icon: "gesture", expage: "payloads/notanotherloader.html" }, { title: "ARABICGUY", subtitle: "1.0(ARABICGUY)", active: false, icon: "face", expage: "payloads/arabicloader.html" }]
    },
	"LAN": {
      index: 8,
      title: "LAN",
      selectedIndex: 0,
      active: false,
      icon: "power",
      items: [{ title: "BO3_COD:ONLINE", subtitle: "1.0(TheoryWrong)", active: false, icon: "language", expage: "payloads/bo3loader.html" }]
	}, 
	"CACHE": {
      index: 9,
      title: "CACHE",
      selectedIndex: 0,
      active: false,
      icon: "copyright",
      items: [{ title: "HOST_CACHE", subtitle: "1.0(Al-Azif)", active: false, icon: "weekend", expage: "payloads/xmbcache.html" }, { title: "USBCACHE_INSTALL", subtitle: "10.0(Stooged)", active: false, icon: "beenhere", expage: "payloads/usbcacheinstall.html" }, { title: "CACHE_INSTALL", subtitle: "10.0(Stooged)", active: false, icon: "book", expage: "payloads/cacheinstall.html" }, { title: "APPLICATION_CACHE", subtitle: "2.0(Hotdogwithmustard)", active: false, icon: "loyalty", expage: "payloads/applicationcache.html" }, { title: "HISTORY_BLOCKER", subtitle: "2.0(Stooged)", active: false, icon: "bookmarks", expage: "payloads/history.html" }]
	},
	"ABOUT": {
      index: 10,
      title: "ABOUT",
      selectedIndex: 0,
      active: false,
      icon: "help",
      items: [{ title: "CREDITI", subtitle: "LEGENDS", active: false, icon: "fingerprint", expage: "payloads/creditsloader.html" }, { title: "INFO", subtitle: "DEFINIZIONI", active: false, icon: "info", expage: "payloads/infoloader.html" }, { title: "INFO", subtitle: "VISITA SITO", active: false, icon: "info", expage: "https://www.gamesandconsoles.org/"]
    },
	"★DEBUG": {
      index: 11,
      title: "★DEBUG",
      selectedIndex: 0,
      active: false,
      icon: "cake",
      items: [{ title: "★PAYLOAD", subtitle: "(QUICK_TESTING)", active: false, icon: "healing", expage: "payloads/testloader.html" }]
	},
  }
  //add zero position to each column and item
};_.each(model.columns, function (c) {
  c.position = { x: 0, y: 0 };
  _.each(c.items, function (i) {
    i.position = {
      x: 0,
      y: 0
    };
  });
});

var xmbVue = new Vue({
  el: "#xmb",
  data: model,
  methods: {
    handleKey: function handleKey(dir, val) {
      this.cursor[dir] += val;
      var nCols = this.nColumns;

      // wrap x
      this.cursor.x = this.cursor.x % nCols;
      if (this.cursor.x < 0) {
        this.cursor.x = this.cursor.x + nCols;
      }

      //wrap y
      var nRows = this.nRows;
      this.cursor.y = this.cursor.y % nRows;
      if (this.cursor.y < 0) {
        this.cursor.y = this.cursor.y + nRows;
      }

      this.highlightCell(this.cursor.x, this.cursor.y);
    },
    highlightCell: function highlightCell(column, row) {

      console.log(column, row);
      //update position of elements as well
      var xAccum = (-column - 1) * (ICON_SIZE + PADDING);
      if (column == 0) {
        xAccum += ICON_SIZE + PADDING;
      }
      var yAccum;

      _.each(this.columns, function (col, colKey) {
        col.active = false;
        yAccum = -(ICON_SIZE + PADDING) * (row + 1);

        col.position.x = xAccum;
        xAccum += ICON_SIZE + PADDING;
        if (column === col.index || column === col.index + 1) {
          xAccum += ICON_SIZE / 2;
        }

        _.each(col.items, function (item, rowN) {
          if (rowN == row && col.index == column) {
            item.active = true;
            col.active = true;
          } else {
            item.active = false;
          }

          if (rowN == row) {
            yAccum += ICON_SIZE + PADDING;
          }
          yAccum += ICON_SIZE + PADDING;
          item.position.y = yAccum;
        });
      });
      this.cursor.y = row;
      this.cursor.x = column;
    }
  },
  watch: {
    cursor: function cursor(e) {
      console.log('cursor mutated', e);
    }
  },
  computed: {
    nColumns: function nColumns() {
      return Object.keys(this.columns).length;
    },
    nRows: function nRows() {
      //get the row at the current index
      var row = this.columnsArray[this.cursor.x];
      if (!row) {
        console.log('invalid row index: ', this.cursor.x);
        return 0;
      }
      return row.items.length; //todo: number of columns in this row
    },
    columnsArray: function columnsArray() {
      var _this = this;

      //get columns in an array
      var arr = [];
      Object.keys(this.columns).forEach(function (key) {
        arr.push(_this.columns[key]);
      });
      return _.sortBy(arr, 'index');
    }
  },
  created: function created() {
    _.each(this.columns, function (column) {
      _.each(column.items, function (item) {
        item.active = false;
      });
    });
    this.highlightCell(this.cursor.x, this.cursor.y);
  }
});

// handle movement based on keys
$('body').on('keypress', function (e) {
  if (e.key == "ArrowUp") {
    xmbVue.handleKey('y', -1);
  } else if (e.key == "ArrowDown") {
    xmbVue.handleKey('y', 1);
  } else if (e.key == "ArrowLeft") {
    xmbVue.handleKey('x', -1);
  } else if (e.key == "ArrowRight") {
    xmbVue.handleKey('x', 1);
  }
});

$('body').on("mousewheel", _.debounce(scrollHandler, 20));

function scrollHandler(e) {
  console.log(e);
  if (e.deltaX) {
    xmbVue.handleKey('x', Math.sign(e.deltaX));
  }
  if (e.deltaY) {
    xmbVue.handleKey('y', Math.sign(e.deltaY));
  }
}
