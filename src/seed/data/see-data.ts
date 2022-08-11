export interface SeedManga {
    id:          string;
    title:       string;
    description: string | null;
    linksM:      string[];
    linksA:      string[];
    tags:        string[];
    date:    Date;
    kokoros:number;
}



interface SeedData {
    mangas: SeedManga[];
}



export const initalData:SeedData={
    mangas:[
        {
            "id": "9773c08b-09da-4553-bda7-bd7d2899b217",
            "title": "vitae, sodales at, velit. Pellentesque ultricies Casa2",
            "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce",
            "linksM":[ "https://netflix.com?q=4"],
            "linksA":[ "http://yahoo.com/group/9"],
            "tags":[ "http://yahoo.com/group/9"],
            "date": new Date("Nov 5, 2021"),
            "kokoros": 41
        },
        {
            "id": "9773c08b-09da-4553-bda7-bd7d2899b2A1",
            "tags":[ "http://yahoo.com/group/9"],
            "title": "Integer mollis. Integer tincidunt aliquam arcu. Aliquam",
            "description": "pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer,",
            "linksM":[ "https://bbc.co.uk?q=test"],
            "linksA":[ "http://facebook.com/sub/cars"],
            "date": new Date("Jan 24, 2023"),
            "kokoros": 45
        },
        {
            "id": "9773c08b-09da-4553-bda7-bd7d2899b2A2",
            "tags":[ "http://yahoo.com/group/9"],
            "title": "vitae, sodales at, velit. Pellentesque ultricies",
            "description": "ipsum leo elementum sem, vitae aliquam eros turpis non enim. Mauris quis turpis vitae",
            "linksM":[ "https://yahoo.com?search=1&q=de"],
            "linksA":[ "http://nytimes.com/sub/cars"],
            "date": new Date("Sep 11, 2022"),
            "kokoros": 17
        },
        {"id": "9773c08b-09da-4553-bda7-bd7d2899b2A4",
            "tags":[ "http://yahoo.com/group/9"],
            "title": "semper, dui lectus",
            "description": "lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel,",
            "linksM":[ "https://whatsapp.com?p=8"],
            "linksA":[ "https://twitter.com/site"],
            "date": new Date("Mar 29, 2022"),
            "kokoros": 16
        },
        {"id": "9773c08b-09da-4553-bda7-bd7d2899b2A5",
            "tags":[ "http://yahoo.com/group/9"],
            "title": "odio. Etiam ligula tortor, dictum eu, placerat",
            "description": "velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est.",
            "linksM":[ "https://wikipedia.org?page=1&offset=1"],
            "linksA":[ "https://netflix.com/en-ca"],
            "date": new Date("Feb 23, 2023"),
            "kokoros": 93
        },
        {"id": "9773c08b-09da-4553-bda7-bd7d2899b2A6",
            "tags":[ "http://yahoo.com/group/9"],
            "title": "orci quis lectus. Nullam suscipit, est ac facilisis",
            "description": "id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum leo",
            "linksM":[ "http://whatsapp.com?ab=441&aad=2"],
            "linksA":[ "https://pinterest.com/fr"],
            "date": new Date("Aug 27, 2022"),
            "kokoros": 94
        },
        {"id": "9773c08b-09da-4553-bda7-bd7d2899b2A7",
            "tags":[ "http://yahoo.com/group/9"],
            "title": "tincidunt aliquam arcu. Aliquam",
            "description": "in faucibus orci luctus et ultrices posuere cubilia Curae Phasellus ornare. Fusce mollis. Duis",
            "linksM":[ "https://netflix.com?q=0"],
            "linksA":[ "http://reddit.com/one"],
            "date": new Date("Mar 15, 2022"),
            "kokoros": 36
        },
        {"id": "9773c08b-09da-4553-bda7-bd7d2899b2A8",
            "tags":[ "http://yahoo.com/group/9"],
            "title": "purus. Maecenas libero est, congue a, aliquet vel,",
            "description": "erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius.",
            "linksM":[ "http://guardian.co.uk?q=11"],
            "linksA":[ "https://facebook.com/en-us"],
            "date": new Date("Dec 9, 2021"),
            "kokoros": 73
        },
        {"id": "9773c08b-09da-4553-bda7-bd7d2899b2A9",
            "tags":[ "http://yahoo.com/group/9"],
            "title": "penatibus et magnis dis parturient montes, nascetur ridiculus",
            "description": "blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis",
            "linksM":[ "http://whatsapp.com?ad=115"],
            "linksA":[ "https://youtube.com/sub"],
            "date": new Date("Dec 31, 2021"),
            "kokoros": 11
        },
        {"id": "9773c08b-09da-4553-bda7-bd7d2899b210",
            "tags":[ "http://yahoo.com/group/9"],
            "title": "dictum. Phasellus in felis. Nulla tempor augue ac ipsum.",
            "description": "sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus.",
            "linksM":[ "http://wikipedia.org?q=0"],
            "linksA":[ "http://ebay.com/settings"],
            "date": new Date("Oct 1, 2021"),
            "kokoros": 73
        },
        {"id": "9773c08b-09da-4553-bda7-bd7d2899b211",
            "tags":[ "http://yahoo.com/group/9"],
            "title": "eu tellus. Phasellus elit pede, malesuada",
            "description": "turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu,",
            "linksM":[ "http://google.com?g=1"],
            "linksA":[ "http://ebay.com/en-us"],
            "date": new Date("Aug 14, 2021"),
            "kokoros": 79
        },
        {"id": "9773c08b-09da-4553-bda7-bd7d2899b212",
            "tags":[ "http://yahoo.com/group/9"],
            "title": "sit amet ante. Vivamus",
            "description": "ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Phasellus ornare. Fusce",
            "linksM":[ "http://facebook.com?p=8"],
            "linksA":[ "http://instagram.com/site"],
            "date": new Date("Aug 17, 2021"),
            "kokoros": 17
        },
        {"id": "9773c08b-09da-4553-bda7-bd7d2899b213",
            "tags":[ "http://yahoo.com/group/9"],
            "title": "molestie in, tempus eu, ligula. Aenean euismod mauris eu",
            "description": "auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo eu arcu. Morbi",
            "linksM":[ "http://reddit.com?q=test"],
            "linksA":[ "https://whatsapp.com/en-ca"],
            "date": new Date("Aug 26, 2022"),
            "kokoros": 42
        },
        {"id": "9773c08b-09da-4553-bda7-bd7d2899b214",
            "tags":[ "http://yahoo.com/group/9"],
            "title": "ac mattis velit justo nec ante. Maecenas mi",
            "description": "mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam",
            "linksM":[ "http://reddit.com?q=11"],
            "linksA":[ "https://wikipedia.org/site"],
            "date": new Date("Apr 2, 2023"),
            "kokoros": 45
        },
        {"id": "9773c08b-09da-4553-bda7-bd7d2899b215",
            "tags":[ "http://yahoo.com/group/9"],
            "title": "a, scelerisque sed, sapien. Nunc pulvinar arcu",
            "description": "nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada",
            "linksM":[ "https://bbc.co.uk?k=0"],
            "linksA":[ "https://wikipedia.org/site"],
            "date": new Date("Mar 22, 2023"),
            "kokoros": 15
        },
        {"id": "9773c08b-09da-4553-bda7-bd7d2899b216",
            "tags":[ "http://yahoo.com/group/9"],
            "title": "sodales at, velit. Pellentesque ultricies",
            "description": "sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi.",
            "linksM":[ "https://ebay.com?search=1&q=de"],
            "linksA":[ "http://facebook.com/sub/cars"],
            "date": new Date("May 10, 2023"),
            "kokoros": 70
        },
        {"id": "9773c08b-09da-4553-bda7-bd7d2899b217",
            "tags":[ "http://yahoo.com/group/9"],
            "title": "est arcu ac orci. Ut semper pretium neque.",
            "description": "consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare",
            "linksM":[ "http://google.com?k=0"],
            "linksA":[ "http://naver.com/user/110"],
            "date": new Date("Nov 29, 2021"),
            "kokoros": 5
        },
        {"id": "9773c08b-09da-4553-bda7-bd7d2899b218",
            "tags":[ "http://yahoo.com/group/9"],
            "title": "et ipsum cursus vestibulum. Mauris",
            "description": "non enim. Mauris quis turpis vitae purus gravida sagittis. Duis gravida. Praesent eu nulla",
            "linksM":[ "http://cnn.com?ab=441&aad=2"],
            "linksA":[ "http://facebook.com/fr"],
            "date": new Date("Mar 11, 2022"),
            "kokoros": 38
        },
        {"id": "9773c08b-09da-4553-bda7-bd7d2899b219",
            "tags":[ "http://yahoo.com/group/9"],
            "title": "neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede",
            "description": "egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis",
            "linksM":[ "https://zoom.us?gi=100"],
            "linksA":[ "https://whatsapp.com/one"],
            "date": new Date("Oct 9, 2021"),
            "kokoros": 98
        },
        {"id": "9773c08b-09da-4553-bda7-bd7d2899b220",
            "tags":[ "http://yahoo.com/group/9"],
            "title": "hendrerit consectetuer, cursus et, magna. Praesent",
            "description": "purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet",
            "linksM":[ "http://naver.com?gi=100"],
            "linksA":[ "https://naver.com/group/9"],
            "date": new Date("Sep 1, 2022"),
            "kokoros": 59
        },
        {"id": "9773c08b-09da-4553-bda7-bd7d2899b221",
            "tags":[ "http://yahoo.com/group/9"],
            "title": "quis massa. Mauris vestibulum,",
            "description": "quis accumsan convallis, ante lectus convallis est, vitae sodales nisi magna sed dui. Fusce",
            "linksM":[ "https://bbc.co.uk?str=se"],
            "linksA":[ "https://cnn.com/user/110"],
            "date": new Date("Jan 20, 2022"),
            "kokoros": 95
        },
        {"id": "9773c08b-09da-4553-bda7-bd7d2899b222",
            "tags":[ "http://yahoo.com/group/9"],
            "title": "orci. Ut sagittis lobortis mauris. Suspendisse aliquet",
            "description": "Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam",
            "linksM":[ "http://reddit.com?g=1"],
            "linksA":[ "http://yahoo.com/settings"],
            "date": new Date("Feb 2, 2023"),
            "kokoros": 5
        },
        {"id": "9773c08b-09da-4553-bda7-bd7d2899b223",
            "tags":[ "http://yahoo.com/group/9"],
            "title": "Aenean egestas hendrerit neque. In ornare sagittis",
            "description": "non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium",
            "linksM":[ "https://facebook.com?page=1&offset=1"],
            "linksA":[ "https://bbc.co.uk/sub"],
            "date": new Date("Nov 15, 2022"),
            "kokoros": 91
        },
        {"id": "9773c08b-09da-4553-bda7-bd7d2899b224",
            "tags":[ "http://yahoo.com/group/9"],
            "title": "est, congue",
            "description": "gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis",
            "linksM":[ "https://bbc.co.uk?q=4"],
            "linksA":[ "https://nytimes.com/en-ca"],
            "date": new Date("Nov 6, 2021"),
            "kokoros": 27
        },
        {"id": "9773c08b-09da-4553-bda7-bd7d2899b225",
            "tags":[ "http://yahoo.com/group/9"],
            "title": "sed dolor. Fusce mi lorem, vehicula et, rutrum eu,",
            "description": "Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae,",
            "linksM":[ "https://zoom.us?page=1&offset=1"],
            "linksA":[ "https://pinterest.com/sub"],
            "date": new Date("Jan 29, 2022"),
            "kokoros": 68
        },
        {"id": "9773c08b-09da-4553-bda7-bd7d2899b226",
            "tags":[ "http://yahoo.com/group/9"],
            "title": "lacus. Ut",
            "description": "vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas",
            "linksM":[ "http://guardian.co.uk?g=1"],
            "linksA":[ "http://reddit.com/settings"],
            "date": new Date("Oct 4, 2022"),
            "kokoros": 15
        },
        {"id": "9773c08b-09da-4553-bda7-bd7d2899b227",
            "tags":[ "http://yahoo.com/group/9"],
            "title": "dictum magna. Ut",
            "description": "feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus",
            "linksM":[ "https://whatsapp.com?q=test"],
            "linksA":[ "http://bbc.co.uk/en-us"],
            "date": new Date("Feb 2, 2023"),
            "kokoros": 41
        },
        {"id": "9773c08b-09da-4553-bda7-bd7d2899b228",
            "tags":[ "http://yahoo.com/group/9"],
            "title": "senectus et netus et malesuada fames",
            "description": "quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis",
            "linksM":[ "https://facebook.com?q=0"],
            "linksA":[ "http://wikipedia.org/settings"],
            "date": new Date("Feb 2, 2023"),
            "kokoros": 73
        },
        {"id": "9773c08b-09da-4553-bda7-bd7d2899b229",
            "tags":[ "http://yahoo.com/group/9"],
            "title": "lectus rutrum urna, nec luctus felis purus ac",
            "description": "feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam auctor, velit eget laoreet",
            "linksM":[ "http://youtube.com?page=1&offset=1"],
            "linksA":[ "http://nytimes.com/group/9"],
            "date": new Date("Feb 22, 2022"),
            "kokoros": 83
        }
    
    ]
}