import { Message } from "@thesysai/genui-sdk";

// Reusable C1 DSL response sample
export const SAMPLE_C1_RESPONSE = `<content thesys="true">{
  "component": {
    "component": "Card",
    "props": {
      "children": [
        {
          "component": "Header",
          "props": {
            "title": "Hello there! 👋"
          }
        },
        {
          "component": "TextContent",
          "props": {
            "textMarkdown": "Hi! Great to meet you. I'm here to help you explore and discover information with rich visuals and interactive content. Whether you're curious about places, products, concepts, or anything else, I'll make sure to provide you with engaging and comprehensive answers.\\n\\nWhat would you like to explore today?"
          }
        }
      ]
    }
  },
  "error": null
}</content>`;

// Mock thread data
export const MOCK_THREADS = [
  {
    threadId: "thread-1",
    title: "Welcome Conversation",
    createdAt: new Date("2025-01-09T10:00:00Z"),
  },
  {
    threadId: "thread-2",
    title: "Stock Analysis: AAPL vs TSLA",
    createdAt: new Date("2025-01-08T15:30:00Z"),
  },
  {
    threadId: "thread-3",
    title: "Help me buy headphones",
    createdAt: new Date("2025-01-07T09:15:00Z"),
  },
];

// Mock messages for each thread
export const MOCK_MESSAGES: Record<string, Message[]> = {
  "thread-1": [
    {
      id: "msg-1-1",
      role: "user",
      content: "Hello!",
    },
    {
      id: "msg-1-2",
      role: "assistant",
      content: `<content thesys="true">{
  &quot;component&quot;: {
    &quot;component&quot;: &quot;Card&quot;,
    &quot;props&quot;: {
      &quot;children&quot;: [
        {
          &quot;component&quot;: &quot;Header&quot;,
          &quot;props&quot;: {
            &quot;title&quot;: &quot;Hello!&quot;,
            &quot;subtitle&quot;: &quot;How can I help you today?&quot;
          }
        },
        {
          &quot;component&quot;: &quot;TextContent&quot;,
          &quot;props&quot;: {
            &quot;textMarkdown&quot;: &quot;Choose a quick action below or tell me what you need.&quot;
          }
        },
        {
          &quot;component&quot;: &quot;MiniCardBlock&quot;,
          &quot;props&quot;: {
            &quot;children&quot;: [
              {
                &quot;component&quot;: &quot;MiniCard&quot;,
                &quot;props&quot;: {
                  &quot;lhs&quot;: {
                    &quot;component&quot;: &quot;ProfileTile&quot;,
                    &quot;props&quot;: {
                      &quot;title&quot;: &quot;Weather&quot;,
                      &quot;label&quot;: &quot;Get local forecast&quot;,
                      &quot;child&quot;: {
                        &quot;component&quot;: &quot;Icon&quot;,
                        &quot;props&quot;: {
                          &quot;name&quot;: &quot;cloud-sun&quot;,
                          &quot;category&quot;: &quot;weather&quot;
                        }
                      }
                    }
                  },
                  &quot;rhs&quot;: {
                    &quot;component&quot;: &quot;Stats&quot;,
                    &quot;props&quot;: {
                      &quot;number&quot;: &quot;Now&quot;,
                      &quot;label&quot;: &quot;Check&quot;
                    }
                  }
                }
              },
              {
                &quot;component&quot;: &quot;MiniCard&quot;,
                &quot;props&quot;: {
                  &quot;lhs&quot;: {
                    &quot;component&quot;: &quot;ProfileTile&quot;,
                    &quot;props&quot;: {
                      &quot;title&quot;: &quot;News&quot;,
                      &quot;label&quot;: &quot;Top headlines&quot;,
                      &quot;child&quot;: {
                        &quot;component&quot;: &quot;Icon&quot;,
                        &quot;props&quot;: {
                          &quot;name&quot;: &quot;newspaper&quot;,
                          &quot;category&quot;: &quot;news&quot;
                        }
                      }
                    }
                  },
                  &quot;rhs&quot;: {
                    &quot;component&quot;: &quot;Stats&quot;,
                    &quot;props&quot;: {
                      &quot;number&quot;: &quot;Today&quot;,
                      &quot;label&quot;: &quot;Read&quot;
                    }
                  }
                }
              },
              {
                &quot;component&quot;: &quot;MiniCard&quot;,
                &quot;props&quot;: {
                  &quot;lhs&quot;: {
                    &quot;component&quot;: &quot;ProfileTile&quot;,
                    &quot;props&quot;: {
                      &quot;title&quot;: &quot;Stocks&quot;,
                      &quot;label&quot;: &quot;Track tickers&quot;,
                      &quot;child&quot;: {
                        &quot;component&quot;: &quot;Icon&quot;,
                        &quot;props&quot;: {
                          &quot;name&quot;: &quot;line-chart&quot;,
                          &quot;category&quot;: &quot;charts&quot;
                        }
                      }
                    }
                  },
                  &quot;rhs&quot;: {
                    &quot;component&quot;: &quot;Stats&quot;,
                    &quot;props&quot;: {
                      &quot;number&quot;: &quot;Live&quot;,
                      &quot;label&quot;: &quot;View&quot;
                    }
                  }
                }
              }
            ]
          }
        },
        {
          &quot;component&quot;: &quot;SectionBlock&quot;,
          &quot;props&quot;: {
            &quot;isFoldable&quot;: false,
            &quot;sections&quot;: [
              {
                &quot;value&quot;: &quot;quick_prompts&quot;,
                &quot;trigger&quot;: &quot;Quick Prompts&quot;,
                &quot;content&quot;: [
                  {
                    &quot;component&quot;: &quot;List&quot;,
                    &quot;props&quot;: {
                      &quot;heading&quot;: &quot;Try one of these&quot;,
                      &quot;variant&quot;: &quot;icon&quot;,
                      &quot;items&quot;: [
                        {
                          &quot;title&quot;: &quot;Set a reminder&quot;,
                          &quot;subtitle&quot;: &quot;“Remind me to call Alex at 4 PM”&quot;,
                          &quot;iconName&quot;: &quot;alarm-clock&quot;,
                          &quot;iconCategory&quot;: &quot;time&quot;
                        },
                        {
                          &quot;title&quot;: &quot;Plan a meal&quot;,
                          &quot;subtitle&quot;: &quot;“Give me a 3-day vegetarian plan”&quot;,
                          &quot;iconName&quot;: &quot;utensils&quot;,
                          &quot;iconCategory&quot;: &quot;food-beverage&quot;
                        },
                        {
                          &quot;title&quot;: &quot;Summarize text&quot;,
                          &quot;subtitle&quot;: &quot;“Summarize this article”&quot;,
                          &quot;iconName&quot;: &quot;file-text&quot;,
                          &quot;iconCategory&quot;: &quot;files&quot;
                        }
                      ]
                    }
                  }
                ]
              }
            ]
          }
        },
        {
          &quot;component&quot;: &quot;Form&quot;,
          &quot;props&quot;: {
            &quot;children&quot;: [
              {
                &quot;children&quot;: {
                  &quot;component&quot;: &quot;Input&quot;,
                  &quot;props&quot;: {
                    &quot;name&quot;: &quot;user_intent_input&quot;,
                    &quot;placeholder&quot;: &quot;Type your request (e.g., plan a trip to Tokyo)&quot;,
                    &quot;type&quot;: &quot;text&quot;,
                    &quot;rules&quot;: {
                      &quot;required&quot;: true,
                      &quot;minLength&quot;: 3
                    }
                  }
                },
                &quot;label&quot;: &quot;Your request&quot;,
                &quot;hint&quot;: &quot;Be as specific as you like&quot;
              }
            ],
            &quot;buttons&quot;: {
              &quot;component&quot;: &quot;ButtonGroup&quot;,
              &quot;props&quot;: {
                &quot;variant&quot;: &quot;horizontal&quot;,
                &quot;children&quot;: [
                  {
                    &quot;component&quot;: &quot;Button&quot;,
                    &quot;props&quot;: {
                      &quot;children&quot;: &quot;Submit&quot;,
                      &quot;name&quot;: &quot;submit_user_intent&quot;
                    }
                  }
                ]
              }
            },
            &quot;name&quot;: &quot;quick_start_form&quot;
          }
        }
      ]
    }
  },
  &quot;error&quot;: null
}</content>`,
    },
    {
      id: "msg-1-3",
      role: "user",
      content: "summarize Odyssey by Homer",
    },
    {
      id: "msg-1-4",
      role: "assistant",
      content: `<content thesys="true">{
  &quot;component&quot;: {
    &quot;component&quot;: &quot;Card&quot;,
    &quot;props&quot;: {
      &quot;children&quot;: [
        {
          &quot;component&quot;: &quot;Header&quot;,
          &quot;props&quot;: {
            &quot;title&quot;: &quot;The Odyssey — Summary&quot;,
            &quot;subtitle&quot;: &quot;Homer’s epic of return, resilience, and identity&quot;
          }
        },
        {
          &quot;component&quot;: &quot;TextContent&quot;,
          &quot;props&quot;: {
            &quot;textMarkdown&quot;: &quot;A concise guide to the plot, key characters, themes, and structure of Homer&#39;s Odyssey.&quot;
          }
        },
        {
          &quot;component&quot;: &quot;MiniCardBlock&quot;,
          &quot;props&quot;: {
            &quot;children&quot;: [
              {
                &quot;component&quot;: &quot;MiniCard&quot;,
                &quot;props&quot;: {
                  &quot;lhs&quot;: {
                    &quot;component&quot;: &quot;ProfileTile&quot;,
                    &quot;props&quot;: {
                      &quot;title&quot;: &quot;Epic Poem&quot;,
                      &quot;label&quot;: &quot;Ancient Greek&quot;,
                      &quot;child&quot;: {
                        &quot;component&quot;: &quot;Icon&quot;,
                        &quot;props&quot;: {
                          &quot;name&quot;: &quot;book-open&quot;,
                          &quot;category&quot;: &quot;files&quot;
                        }
                      }
                    }
                  },
                  &quot;rhs&quot;: {
                    &quot;component&quot;: &quot;Stats&quot;,
                    &quot;props&quot;: {
                      &quot;number&quot;: &quot;24&quot;,
                      &quot;label&quot;: &quot;Books&quot;
                    }
                  }
                }
              },
              {
                &quot;component&quot;: &quot;MiniCard&quot;,
                &quot;props&quot;: {
                  &quot;lhs&quot;: {
                    &quot;component&quot;: &quot;ProfileTile&quot;,
                    &quot;props&quot;: {
                      &quot;title&quot;: &quot;Odysseus&quot;,
                      &quot;label&quot;: &quot;Hero of Ithaca&quot;,
                      &quot;child&quot;: {
                        &quot;component&quot;: &quot;Icon&quot;,
                        &quot;props&quot;: {
                          &quot;name&quot;: &quot;compass&quot;,
                          &quot;category&quot;: &quot;navigation&quot;
                        }
                      }
                    }
                  },
                  &quot;rhs&quot;: {
                    &quot;component&quot;: &quot;Stats&quot;,
                    &quot;props&quot;: {
                      &quot;number&quot;: &quot;10 yrs&quot;,
                      &quot;label&quot;: &quot;Homeward&quot;
                    }
                  }
                }
              },
              {
                &quot;component&quot;: &quot;MiniCard&quot;,
                &quot;props&quot;: {
                  &quot;lhs&quot;: {
                    &quot;component&quot;: &quot;ProfileTile&quot;,
                    &quot;props&quot;: {
                      &quot;title&quot;: &quot;After Troy&quot;,
                      &quot;label&quot;: &quot;Sequel to Iliad&quot;,
                      &quot;child&quot;: {
                        &quot;component&quot;: &quot;Icon&quot;,
                        &quot;props&quot;: {
                          &quot;name&quot;: &quot;flag&quot;,
                          &quot;category&quot;: &quot;navigation&quot;
                        }
                      }
                    }
                  },
                  &quot;rhs&quot;: {
                    &quot;component&quot;: &quot;Stats&quot;,
                    &quot;props&quot;: {
                      &quot;number&quot;: &quot;c. 8th BCE&quot;,
                      &quot;label&quot;: &quot;Composition&quot;
                    }
                  }
                }
              }
            ]
          }
        },
        {
          &quot;component&quot;: &quot;Layout&quot;,
          &quot;props&quot;: {
            &quot;children&quot;: {
              &quot;variant&quot;: &quot;L-S&quot;,
              &quot;rows&quot;: [
                {
                  &quot;largeLeft&quot;: [
                    {
                      &quot;component&quot;: &quot;TextContent&quot;,
                      &quot;props&quot;: {
                        &quot;header&quot;: {
                          &quot;component&quot;: &quot;InlineHeader&quot;,
                          &quot;props&quot;: {
                            &quot;heading&quot;: &quot;Plot Overview&quot;
                          }
                        },
                        &quot;textMarkdown&quot;: &quot;The Odyssey follows Odysseus, king of Ithaca, on his perilous ten‑year journey home after the Trojan War. While suitors overrun his palace pressuring his wife, Penelope, and his son, Telemachus, the gods debate his fate. Odysseus recounts adventures that include escaping the Cyclops Polyphemus, resisting the Sirens, surviving Scylla and Charybdis, and being detained by the nymph Calypso. With Athena’s aid, he returns in disguise, tests loyalties, reveals himself, defeats the suitors, and restores order to Ithaca.&quot;
                      }
                    },
                    {
                      &quot;component&quot;: &quot;List&quot;,
                      &quot;props&quot;: {
                        &quot;heading&quot;: &quot;Major Episodes&quot;,
                        &quot;variant&quot;: &quot;icon&quot;,
                        &quot;items&quot;: [
                          {
                            &quot;title&quot;: &quot;Telemachy&quot;,
                            &quot;subtitle&quot;: &quot;Books 1–4: Telemachus searches for news of his father.&quot;,
                            &quot;iconName&quot;: &quot;user-search&quot;,
                            &quot;iconCategory&quot;: &quot;people&quot;
                          },
                          {
                            &quot;title&quot;: &quot;Odysseus’ Wanderings&quot;,
                            &quot;subtitle&quot;: &quot;Books 5–12: From Calypso’s isle to the Phaeacians; includes Cyclops, Circe, Sirens, Scylla/Charybdis.&quot;,
                            &quot;iconName&quot;: &quot;map&quot;,
                            &quot;iconCategory&quot;: &quot;navigation&quot;
                          },
                          {
                            &quot;title&quot;: &quot;Return and Revenge&quot;,
                            &quot;subtitle&quot;: &quot;Books 13–22: Disguise in Ithaca, recognition scenes, bow contest, slaying of suitors.&quot;,
                            &quot;iconName&quot;: &quot;swords&quot;,
                            &quot;iconCategory&quot;: &quot;tools&quot;
                          },
                          {
                            &quot;title&quot;: &quot;Restoration&quot;,
                            &quot;subtitle&quot;: &quot;Books 23–24: Reunion, peace brokered, order restored.&quot;,
                            &quot;iconName&quot;: &quot;olive&quot;,
                            &quot;iconCategory&quot;: &quot;nature&quot;
                          }
                        ]
                      }
                    },
                    {
                      &quot;component&quot;: &quot;Tabs&quot;,
                      &quot;props&quot;: {
                        &quot;children&quot;: [
                          {
                            &quot;value&quot;: &quot;themes&quot;,
                            &quot;trigger&quot;: {
                              &quot;text&quot;: &quot;Themes&quot;
                            },
                            &quot;content&quot;: [
                              {
                                &quot;component&quot;: &quot;List&quot;,
                                &quot;props&quot;: {
                                  &quot;variant&quot;: &quot;icon&quot;,
                                  &quot;items&quot;: [
                                    {
                                      &quot;title&quot;: &quot;Homecoming (Nostos)&quot;,
                                      &quot;subtitle&quot;: &quot;Longing for home drives the plot and defines identity.&quot;,
                                      &quot;iconName&quot;: &quot;home&quot;,
                                      &quot;iconCategory&quot;: &quot;home&quot;
                                    },
                                    {
                                      &quot;title&quot;: &quot;Hospitality (Xenia)&quot;,
                                      &quot;subtitle&quot;: &quot;Hospitality reveals virtue; violations provoke divine and human justice.&quot;,
                                      &quot;iconName&quot;: &quot;handshake&quot;,
                                      &quot;iconCategory&quot;: &quot;people&quot;
                                    },
                                    {
                                      &quot;title&quot;: &quot;Cunning vs. Strength&quot;,
                                      &quot;subtitle&quot;: &quot;Odysseus’ metis (craftiness) outmatches brute force.&quot;,
                                      &quot;iconName&quot;: &quot;brain&quot;,
                                      &quot;iconCategory&quot;: &quot;science&quot;
                                    },
                                    {
                                      &quot;title&quot;: &quot;Fate and the Gods&quot;,
                                      &quot;subtitle&quot;: &quot;Divine will guides but does not erase human agency.&quot;,
                                      &quot;iconName&quot;: &quot;sparkles&quot;,
                                      &quot;iconCategory&quot;: &quot;nature&quot;
                                    }
                                  ]
                                }
                              }
                            ]
                          },
                          {
                            &quot;value&quot;: &quot;motifs&quot;,
                            &quot;trigger&quot;: {
                              &quot;text&quot;: &quot;Motifs&quot;
                            },
                            &quot;content&quot;: [
                              {
                                &quot;component&quot;: &quot;List&quot;,
                                &quot;props&quot;: {
                                  &quot;variant&quot;: &quot;icon&quot;,
                                  &quot;items&quot;: [
                                    {
                                      &quot;title&quot;: &quot;Disguise &amp; Recognition&quot;,
                                      &quot;subtitle&quot;: &quot;Revelations test loyalty and identity.&quot;,
                                      &quot;iconName&quot;: &quot;mask&quot;,
                                      &quot;iconCategory&quot;: &quot;people&quot;
                                    },
                                    {
                                      &quot;title&quot;: &quot;Storytelling&quot;,
                                      &quot;subtitle&quot;: &quot;Embedded tales shape memory and reputation.&quot;,
                                      &quot;iconName&quot;: &quot;quote&quot;,
                                      &quot;iconCategory&quot;: &quot;communication&quot;
                                    },
                                    {
                                      &quot;title&quot;: &quot;Tests &amp; Trials&quot;,
                                      &quot;subtitle&quot;: &quot;From the bow contest to moral choices at sea.&quot;,
                                      &quot;iconName&quot;: &quot;flag-triangle-right&quot;,
                                      &quot;iconCategory&quot;: &quot;arrows&quot;
                                    }
                                  ]
                                }
                              }
                            ]
                          },
                          {
                            &quot;value&quot;: &quot;symbols&quot;,
                            &quot;trigger&quot;: {
                              &quot;text&quot;: &quot;Symbols&quot;
                            },
                            &quot;content&quot;: [
                              {
                                &quot;component&quot;: &quot;List&quot;,
                                &quot;props&quot;: {
                                  &quot;variant&quot;: &quot;icon&quot;,
                                  &quot;items&quot;: [
                                    {
                                      &quot;title&quot;: &quot;The Sea&quot;,
                                      &quot;subtitle&quot;: &quot;Chaos, danger, and the boundary between worlds.&quot;,
                                      &quot;iconName&quot;: &quot;waves&quot;,
                                      &quot;iconCategory&quot;: &quot;nature&quot;
                                    },
                                    {
                                      &quot;title&quot;: &quot;The Bow&quot;,
                                      &quot;subtitle&quot;: &quot;Rightful kingship and unmatched identity.&quot;,
                                      &quot;iconName&quot;: &quot;bow-and-arrow&quot;,
                                      &quot;iconCategory&quot;: &quot;sports&quot;
                                    },
                                    {
                                      &quot;title&quot;: &quot;Olive Tree Bed&quot;,
                                      &quot;subtitle&quot;: &quot;Unmoving foundation of marriage and home.&quot;,
                                      &quot;iconName&quot;: &quot;tree-pine&quot;,
                                      &quot;iconCategory&quot;: &quot;nature&quot;
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ],
                  &quot;smallRight&quot;: [
                    {
                      &quot;component&quot;: &quot;List&quot;,
                      &quot;props&quot;: {
                        &quot;heading&quot;: &quot;Key Characters&quot;,
                        &quot;variant&quot;: &quot;icon&quot;,
                        &quot;items&quot;: [
                          {
                            &quot;title&quot;: &quot;Odysseus&quot;,
                            &quot;subtitle&quot;: &quot;Clever, resilient hero; king of Ithaca.&quot;,
                            &quot;iconName&quot;: &quot;person-standing&quot;,
                            &quot;iconCategory&quot;: &quot;people&quot;
                          },
                          {
                            &quot;title&quot;: &quot;Penelope&quot;,
                            &quot;subtitle&quot;: &quot;Faithful wife; famed for patience and wit.&quot;,
                            &quot;iconName&quot;: &quot;feather&quot;,
                            &quot;iconCategory&quot;: &quot;people&quot;
                          },
                          {
                            &quot;title&quot;: &quot;Telemachus&quot;,
                            &quot;subtitle&quot;: &quot;Son coming of age; partner in restoration.&quot;,
                            &quot;iconName&quot;: &quot;child&quot;,
                            &quot;iconCategory&quot;: &quot;people&quot;
                          },
                          {
                            &quot;title&quot;: &quot;Athena&quot;,
                            &quot;subtitle&quot;: &quot;Goddess-patron; guides and protects.&quot;,
                            &quot;iconName&quot;: &quot;shield&quot;,
                            &quot;iconCategory&quot;: &quot;security&quot;
                          },
                          {
                            &quot;title&quot;: &quot;Poseidon&quot;,
                            &quot;subtitle&quot;: &quot;Sea god opposing Odysseus for blinding his son.&quot;,
                            &quot;iconName&quot;: &quot;anchor&quot;,
                            &quot;iconCategory&quot;: &quot;travel&quot;
                          }
                        ]
                      }
                    },
                    {
                      &quot;component&quot;: &quot;CalloutV2&quot;,
                      &quot;props&quot;: {
                        &quot;variant&quot;: &quot;info&quot;,
                        &quot;title&quot;: &quot;Structure Tip&quot;,
                        &quot;description&quot;: &quot;The poem starts in medias res (in the middle of things), with backstory revealed through Odysseus’s own narration.&quot;
                      }
                    },
                    {
                      &quot;component&quot;: &quot;Steps&quot;,
                      &quot;props&quot;: {
                        &quot;children&quot;: [
                          {
                            &quot;component&quot;: &quot;StepsItem&quot;,
                            &quot;props&quot;: {
                              &quot;title&quot;: &quot;Set-Up&quot;,
                              &quot;details&quot;: {
                                &quot;component&quot;: &quot;TextContent&quot;,
                                &quot;props&quot;: {
                                  &quot;textMarkdown&quot;: &quot;Suitors devour Ithaca’s wealth; Telemachus seeks news.&quot;
                                }
                              }
                            }
                          },
                          {
                            &quot;component&quot;: &quot;StepsItem&quot;,
                            &quot;props&quot;: {
                              &quot;title&quot;: &quot;Wanderings&quot;,
                              &quot;details&quot;: {
                                &quot;component&quot;: &quot;TextContent&quot;,
                                &quot;props&quot;: {
                                  &quot;textMarkdown&quot;: &quot;Odysseus recounts trials on his voyage home.&quot;
                                }
                              }
                            }
                          },
                          {
                            &quot;component&quot;: &quot;StepsItem&quot;,
                            &quot;props&quot;: {
                              &quot;title&quot;: &quot;Return&quot;,
                              &quot;details&quot;: {
                                &quot;component&quot;: &quot;TextContent&quot;,
                                &quot;props&quot;: {
                                  &quot;textMarkdown&quot;: &quot;Disguise, recognition, justice, and reconciliation.&quot;
                                }
                              }
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          }
        },
        {
          &quot;component&quot;: &quot;SectionBlock&quot;,
          &quot;props&quot;: {
            &quot;isFoldable&quot;: false,
            &quot;sections&quot;: [
              {
                &quot;value&quot;: &quot;study_helpers&quot;,
                &quot;trigger&quot;: &quot;Study Helpers&quot;,
                &quot;content&quot;: [
                  {
                    &quot;component&quot;: &quot;Table&quot;,
                    &quot;props&quot;: {
                      &quot;tableHeader&quot;: {
                        &quot;rows&quot;: [
                          {
                            &quot;children&quot;: &quot;Book Range&quot;,
                            &quot;type&quot;: &quot;string&quot;
                          },
                          {
                            &quot;children&quot;: &quot;Focus&quot;,
                            &quot;type&quot;: &quot;string&quot;
                          },
                          {
                            &quot;children&quot;: &quot;Highlights&quot;,
                            &quot;type&quot;: &quot;string&quot;
                          }
                        ]
                      },
                      &quot;tableBody&quot;: {
                        &quot;rows&quot;: [
                          {
                            &quot;children&quot;: [
                              &quot;1–4&quot;,
                              &quot;Telemachy&quot;,
                              &quot;Ithaca, suitors, Telemachus visits Nestor and Menelaus&quot;
                            ]
                          },
                          {
                            &quot;children&quot;: [
                              &quot;5–8&quot;,
                              &quot;From Calypso to Phaeacia&quot;,
                              &quot;Release from Ogygia; Nausicaa; hospitality of Alcinous&quot;
                            ]
                          },
                          {
                            &quot;children&quot;: [
                              &quot;9–12&quot;,
                              &quot;Odysseus’ Tales&quot;,
                              &quot;Cyclops, Aeolus, Circe, Underworld, Sirens, Scylla/Charybdis&quot;
                            ]
                          },
                          {
                            &quot;children&quot;: [
                              &quot;13–16&quot;,
                              &quot;Return &amp; Planning&quot;,
                              &quot;Disguise in Ithaca; reunion with Telemachus&quot;
                            ]
                          },
                          {
                            &quot;children&quot;: [
                              &quot;17–20&quot;,
                              &quot;Tensions Rise&quot;,
                              &quot;Abuses by suitors; recognition scenes build&quot;
                            ]
                          },
                          {
                            &quot;children&quot;: [
                              &quot;21–24&quot;,
                              &quot;Justice &amp; Peace&quot;,
                              &quot;Bow contest, suitors slain, recognition, truce&quot;
                            ]
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  },
  &quot;error&quot;: null
}</content>`,
    },
  ],
  "thread-2": [
    {
      id: "msg-2-1",
      role: "user",
      content: "Compare AAPL vs TSLA",
    },
    {
      id: "msg-2-2",
      role: "assistant",
      content: `<content thesys="true">{
  &quot;component&quot;: {
    &quot;component&quot;: &quot;Card&quot;,
    &quot;props&quot;: {
      &quot;children&quot;: [
        {
          &quot;component&quot;: &quot;Header&quot;,
          &quot;props&quot;: {
            &quot;title&quot;: &quot;AAPL vs TSLA&quot;,
            &quot;subtitle&quot;: &quot;Quick comparison: financials, growth, and valuation&quot;
          }
        },
        {
          &quot;component&quot;: &quot;TextContent&quot;,
          &quot;props&quot;: {
            &quot;textMarkdown&quot;: &quot;Synthetic snapshot for illustration. Use this as a directional comparison.&quot;
          }
        },
        {
          &quot;component&quot;: &quot;MiniCardBlock&quot;,
          &quot;props&quot;: {
            &quot;children&quot;: [
              {
                &quot;component&quot;: &quot;MiniCard&quot;,
                &quot;props&quot;: {
                  &quot;lhs&quot;: {
                    &quot;component&quot;: &quot;ProfileTile&quot;,
                    &quot;props&quot;: {
                      &quot;title&quot;: &quot;Apple Inc.&quot;,
                      &quot;label&quot;: &quot;NASDAQ: AAPL&quot;,
                      &quot;child&quot;: {
                        &quot;component&quot;: &quot;Icon&quot;,
                        &quot;props&quot;: {
                          &quot;name&quot;: &quot;apple&quot;,
                          &quot;category&quot;: &quot;brands&quot;
                        }
                      }
                    }
                  },
                  &quot;rhs&quot;: {
                    &quot;component&quot;: &quot;Stats&quot;,
                    &quot;props&quot;: {
                      &quot;number&quot;: &quot;$3.10T&quot;,
                      &quot;label&quot;: &quot;Market Cap&quot;
                    }
                  }
                }
              },
              {
                &quot;component&quot;: &quot;MiniCard&quot;,
                &quot;props&quot;: {
                  &quot;lhs&quot;: {
                    &quot;component&quot;: &quot;ProfileTile&quot;,
                    &quot;props&quot;: {
                      &quot;title&quot;: &quot;Tesla, Inc.&quot;,
                      &quot;label&quot;: &quot;NASDAQ: TSLA&quot;,
                      &quot;child&quot;: {
                        &quot;component&quot;: &quot;Icon&quot;,
                        &quot;props&quot;: {
                          &quot;name&quot;: &quot;car&quot;,
                          &quot;category&quot;: &quot;transportation&quot;
                        }
                      }
                    }
                  },
                  &quot;rhs&quot;: {
                    &quot;component&quot;: &quot;Stats&quot;,
                    &quot;props&quot;: {
                      &quot;number&quot;: &quot;$720B&quot;,
                      &quot;label&quot;: &quot;Market Cap&quot;
                    }
                  }
                }
              }
            ]
          }
        },
        {
          &quot;component&quot;: &quot;Layout&quot;,
          &quot;props&quot;: {
            &quot;children&quot;: {
              &quot;variant&quot;: &quot;M-M&quot;,
              &quot;rows&quot;: [
                {
                  &quot;headerLeft&quot;: {
                    &quot;component&quot;: &quot;InlineHeader&quot;,
                    &quot;props&quot;: {
                      &quot;heading&quot;: &quot;Revenue Trend&quot;
                    }
                  },
                  &quot;mediumLeft&quot;: [
                    {
                      &quot;component&quot;: &quot;LineChartV2&quot;,
                      &quot;props&quot;: {
                        &quot;type&quot;: &quot;condensedNormal&quot;,
                        &quot;variant&quot;: &quot;linear&quot;,
                        &quot;chartData&quot;: {
                          &quot;header&quot;: {
                            &quot;component&quot;: &quot;InlineHeader&quot;,
                            &quot;props&quot;: {
                              &quot;heading&quot;: &quot;Apple Revenue (Quarterly, $b)&quot;
                            }
                          },
                          &quot;unit&quot;: &quot;b&quot;,
                          &quot;data&quot;: {
                            &quot;labels&quot;: [
                              &quot;Q1&quot;,
                              &quot;Q2&quot;,
                              &quot;Q3&quot;,
                              &quot;Q4&quot;,
                              &quot;Q5&quot;,
                              &quot;Q6&quot;,
                              &quot;Q7&quot;,
                              &quot;Q8&quot;
                            ],
                            &quot;series&quot;: [
                              {
                                &quot;category&quot;: &quot;AAPL&quot;,
                                &quot;values&quot;: [111, 89, 82, 117, 97, 83, 90, 118]
                              }
                            ]
                          }
                        },
                        &quot;xAxisLabel&quot;: &quot;Quarter&quot;,
                        &quot;yAxisLabel&quot;: &quot;Revenue ($b)&quot;
                      }
                    }
                  ],
                  &quot;headerRight&quot;: {
                    &quot;component&quot;: &quot;InlineHeader&quot;,
                    &quot;props&quot;: {
                      &quot;heading&quot;: &quot;Revenue Trend&quot;
                    }
                  },
                  &quot;mediumRight&quot;: [
                    {
                      &quot;component&quot;: &quot;LineChartV2&quot;,
                      &quot;props&quot;: {
                        &quot;type&quot;: &quot;condensedNormal&quot;,
                        &quot;variant&quot;: &quot;linear&quot;,
                        &quot;chartData&quot;: {
                          &quot;header&quot;: {
                            &quot;component&quot;: &quot;InlineHeader&quot;,
                            &quot;props&quot;: {
                              &quot;heading&quot;: &quot;Tesla Revenue (Quarterly, $b)&quot;
                            }
                          },
                          &quot;unit&quot;: &quot;b&quot;,
                          &quot;data&quot;: {
                            &quot;labels&quot;: [
                              &quot;Q1&quot;,
                              &quot;Q2&quot;,
                              &quot;Q3&quot;,
                              &quot;Q4&quot;,
                              &quot;Q5&quot;,
                              &quot;Q6&quot;,
                              &quot;Q7&quot;,
                              &quot;Q8&quot;
                            ],
                            &quot;series&quot;: [
                              {
                                &quot;category&quot;: &quot;TSLA&quot;,
                                &quot;values&quot;: [10, 12, 13, 17, 19, 21, 25, 24]
                              }
                            ]
                          }
                        },
                        &quot;xAxisLabel&quot;: &quot;Quarter&quot;,
                        &quot;yAxisLabel&quot;: &quot;Revenue ($b)&quot;
                      }
                    }
                  ]
                },
                {
                  &quot;headerLeft&quot;: {
                    &quot;component&quot;: &quot;InlineHeader&quot;,
                    &quot;props&quot;: {
                      &quot;heading&quot;: &quot;Margins &amp; Growth&quot;
                    }
                  },
                  &quot;mediumLeft&quot;: [
                    {
                      &quot;component&quot;: &quot;BarChartV2&quot;,
                      &quot;props&quot;: {
                        &quot;variant&quot;: &quot;grouped&quot;,
                        &quot;type&quot;: &quot;normal&quot;,
                        &quot;chartData&quot;: {
                          &quot;header&quot;: {
                            &quot;component&quot;: &quot;InlineHeader&quot;,
                            &quot;props&quot;: {
                              &quot;heading&quot;: &quot;AAPL Profitability&quot;
                            }
                          },
                          &quot;data&quot;: {
                            &quot;labels&quot;: [&quot;Gross&quot;, &quot;Operating&quot;, &quot;Net&quot;],
                            &quot;series&quot;: [
                              {
                                &quot;category&quot;: &quot;Margin %&quot;,
                                &quot;values&quot;: [44, 30, 25]
                              }
                            ]
                          }
                        },
                        &quot;xAxisLabel&quot;: &quot;Margin Type&quot;,
                        &quot;yAxisLabel&quot;: &quot;Percent&quot;
                      }
                    },
                    {
                      &quot;component&quot;: &quot;TextContent&quot;,
                      &quot;props&quot;: {
                        &quot;textMarkdown&quot;: &quot;- YoY revenue growth: ~7%\n- Free cash flow: strong, diversified hardware + services&quot;
                      }
                    }
                  ],
                  &quot;headerRight&quot;: {
                    &quot;component&quot;: &quot;InlineHeader&quot;,
                    &quot;props&quot;: {
                      &quot;heading&quot;: &quot;Margins &amp; Growth&quot;
                    }
                  },
                  &quot;mediumRight&quot;: [
                    {
                      &quot;component&quot;: &quot;BarChartV2&quot;,
                      &quot;props&quot;: {
                        &quot;variant&quot;: &quot;grouped&quot;,
                        &quot;type&quot;: &quot;normal&quot;,
                        &quot;chartData&quot;: {
                          &quot;header&quot;: {
                            &quot;component&quot;: &quot;InlineHeader&quot;,
                            &quot;props&quot;: {
                              &quot;heading&quot;: &quot;TSLA Profitability&quot;
                            }
                          },
                          &quot;data&quot;: {
                            &quot;labels&quot;: [&quot;Gross&quot;, &quot;Operating&quot;, &quot;Net&quot;],
                            &quot;series&quot;: [
                              {
                                &quot;category&quot;: &quot;Margin %&quot;,
                                &quot;values&quot;: [21, 12, 9]
                              }
                            ]
                          }
                        },
                        &quot;xAxisLabel&quot;: &quot;Margin Type&quot;,
                        &quot;yAxisLabel&quot;: &quot;Percent&quot;
                      }
                    },
                    {
                      &quot;component&quot;: &quot;TextContent&quot;,
                      &quot;props&quot;: {
                        &quot;textMarkdown&quot;: &quot;- YoY revenue growth: ~18%\n- Scaling manufacturing, energy storage growth&quot;
                      }
                    }
                  ]
                },
                {
                  &quot;headerLeft&quot;: {
                    &quot;component&quot;: &quot;InlineHeader&quot;,
                    &quot;props&quot;: {
                      &quot;heading&quot;: &quot;Valuation &amp; Risk&quot;
                    }
                  },
                  &quot;mediumLeft&quot;: [
                    {
                      &quot;component&quot;: &quot;Table&quot;,
                      &quot;props&quot;: {
                        &quot;tableHeader&quot;: {
                          &quot;rows&quot;: [
                            {
                              &quot;children&quot;: &quot;Metric&quot;,
                              &quot;type&quot;: &quot;string&quot;
                            },
                            {
                              &quot;children&quot;: &quot;AAPL&quot;,
                              &quot;type&quot;: &quot;string&quot;
                            }
                          ]
                        },
                        &quot;tableBody&quot;: {
                          &quot;rows&quot;: [
                            {
                              &quot;children&quot;: [&quot;P/E (TTM)&quot;, &quot;29x&quot;]
                            },
                            {
                              &quot;children&quot;: [&quot;EV/Revenue&quot;, &quot;7.1x&quot;]
                            },
                            {
                              &quot;children&quot;: [&quot;Debt/Equity&quot;, &quot;1.6x&quot;]
                            },
                            {
                              &quot;children&quot;: [&quot;Beta&quot;, &quot;1.2&quot;]
                            }
                          ]
                        }
                      }
                    },
                    {
                      &quot;component&quot;: &quot;TagBlock&quot;,
                      &quot;props&quot;: {
                        &quot;children&quot;: [
                          {
                            &quot;text&quot;: &quot;Mega-cap&quot;,
                            &quot;iconName&quot;: &quot;building-2&quot;,
                            &quot;iconCategory&quot;: &quot;buildings&quot;
                          },
                          {
                            &quot;text&quot;: &quot;Services mix&quot;,
                            &quot;iconName&quot;: &quot;wallet&quot;,
                            &quot;iconCategory&quot;: &quot;finance&quot;
                          }
                        ]
                      }
                    }
                  ],
                  &quot;headerRight&quot;: {
                    &quot;component&quot;: &quot;InlineHeader&quot;,
                    &quot;props&quot;: {
                      &quot;heading&quot;: &quot;Valuation &amp; Risk&quot;
                    }
                  },
                  &quot;mediumRight&quot;: [
                    {
                      &quot;component&quot;: &quot;Table&quot;,
                      &quot;props&quot;: {
                        &quot;tableHeader&quot;: {
                          &quot;rows&quot;: [
                            {
                              &quot;children&quot;: &quot;Metric&quot;,
                              &quot;type&quot;: &quot;string&quot;
                            },
                            {
                              &quot;children&quot;: &quot;TSLA&quot;,
                              &quot;type&quot;: &quot;string&quot;
                            }
                          ]
                        },
                        &quot;tableBody&quot;: {
                          &quot;rows&quot;: [
                            {
                              &quot;children&quot;: [&quot;P/E (TTM)&quot;, &quot;64x&quot;]
                            },
                            {
                              &quot;children&quot;: [&quot;EV/Revenue&quot;, &quot;8.9x&quot;]
                            },
                            {
                              &quot;children&quot;: [&quot;Debt/Equity&quot;, &quot;0.1x&quot;]
                            },
                            {
                              &quot;children&quot;: [&quot;Beta&quot;, &quot;2.0&quot;]
                            }
                          ]
                        }
                      }
                    },
                    {
                      &quot;component&quot;: &quot;TagBlock&quot;,
                      &quot;props&quot;: {
                        &quot;children&quot;: [
                          {
                            &quot;text&quot;: &quot;High growth&quot;,
                            &quot;iconName&quot;: &quot;trending-up&quot;,
                            &quot;iconCategory&quot;: &quot;charts&quot;
                          },
                          {
                            &quot;text&quot;: &quot;Cyclicals exposure&quot;,
                            &quot;iconName&quot;: &quot;factory&quot;,
                            &quot;iconCategory&quot;: &quot;buildings&quot;
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          }
        },
        {
          &quot;component&quot;: &quot;SectionBlock&quot;,
          &quot;props&quot;: {
            &quot;isFoldable&quot;: false,
            &quot;sections&quot;: [
              {
                &quot;value&quot;: &quot;section1&quot;,
                &quot;trigger&quot;: &quot;Key Takeaways&quot;,
                &quot;content&quot;: [
                  {
                    &quot;component&quot;: &quot;List&quot;,
                    &quot;props&quot;: {
                      &quot;variant&quot;: &quot;icon&quot;,
                      &quot;items&quot;: [
                        {
                          &quot;title&quot;: &quot;AAPL: resilient cash flows, premium valuation&quot;,
                          &quot;subtitle&quot;: &quot;Stronger margins and services durability&quot;,
                          &quot;iconName&quot;: &quot;shield-check&quot;,
                          &quot;iconCategory&quot;: &quot;security&quot;
                        },
                        {
                          &quot;title&quot;: &quot;TSLA: higher growth, higher volatility&quot;,
                          &quot;subtitle&quot;: &quot;Manufacturing scale-up and energy optionality&quot;,
                          &quot;iconName&quot;: &quot;zap&quot;,
                          &quot;iconCategory&quot;: &quot;energy&quot;
                        },
                        {
                          &quot;title&quot;: &quot;Portfolio fit depends on risk tolerance&quot;,
                          &quot;subtitle&quot;: &quot;Stability vs. upside&quot;,
                          &quot;iconName&quot;: &quot;scales&quot;,
                          &quot;iconCategory&quot;: &quot;shapes&quot;
                        }
                      ]
                    }
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  },
  &quot;error&quot;: null
}</content>`,
    },
    {
      id: "msg-2-3",
      role: "user",
      content: "break down AAPL's revenue by products",
    },
    {
      id: "msg-2-4",
      role: "assistant",
      content: `<content thesys="true">{
  &quot;component&quot;: {
    &quot;component&quot;: &quot;Card&quot;,
    &quot;props&quot;: {
      &quot;children&quot;: [
        {
          &quot;component&quot;: &quot;Header&quot;,
          &quot;props&quot;: {
            &quot;title&quot;: &quot;Apple Revenue by Product&quot;,
            &quot;subtitle&quot;: &quot;Synthetic breakdown (latest fiscal year estimate)&quot;
          }
        },
        {
          &quot;component&quot;: &quot;TextContent&quot;,
          &quot;props&quot;: {
            &quot;textMarkdown&quot;: &quot;Indicative figures for analysis only.&quot;
          }
        },
        {
          &quot;component&quot;: &quot;MiniCardBlock&quot;,
          &quot;props&quot;: {
            &quot;children&quot;: [
              {
                &quot;component&quot;: &quot;MiniCard&quot;,
                &quot;props&quot;: {
                  &quot;lhs&quot;: {
                    &quot;component&quot;: &quot;ProfileTile&quot;,
                    &quot;props&quot;: {
                      &quot;title&quot;: &quot;iPhone&quot;,
                      &quot;label&quot;: &quot;Flagship smartphones&quot;,
                      &quot;child&quot;: {
                        &quot;component&quot;: &quot;Icon&quot;,
                        &quot;props&quot;: {
                          &quot;name&quot;: &quot;smartphone&quot;,
                          &quot;category&quot;: &quot;devices&quot;
                        }
                      }
                    }
                  },
                  &quot;rhs&quot;: {
                    &quot;component&quot;: &quot;Stats&quot;,
                    &quot;props&quot;: {
                      &quot;number&quot;: &quot;$205.0B&quot;,
                      &quot;label&quot;: &quot;48%&quot;
                    }
                  }
                }
              },
              {
                &quot;component&quot;: &quot;MiniCard&quot;,
                &quot;props&quot;: {
                  &quot;lhs&quot;: {
                    &quot;component&quot;: &quot;ProfileTile&quot;,
                    &quot;props&quot;: {
                      &quot;title&quot;: &quot;Services&quot;,
                      &quot;label&quot;: &quot;App Store, iCloud, TV+, etc.&quot;,
                      &quot;child&quot;: {
                        &quot;component&quot;: &quot;Icon&quot;,
                        &quot;props&quot;: {
                          &quot;name&quot;: &quot;wallet&quot;,
                          &quot;category&quot;: &quot;finance&quot;
                        }
                      }
                    }
                  },
                  &quot;rhs&quot;: {
                    &quot;component&quot;: &quot;Stats&quot;,
                    &quot;props&quot;: {
                      &quot;number&quot;: &quot;$90.0B&quot;,
                      &quot;label&quot;: &quot;21%&quot;
                    }
                  }
                }
              },
              {
                &quot;component&quot;: &quot;MiniCard&quot;,
                &quot;props&quot;: {
                  &quot;lhs&quot;: {
                    &quot;component&quot;: &quot;ProfileTile&quot;,
                    &quot;props&quot;: {
                      &quot;title&quot;: &quot;Mac&quot;,
                      &quot;label&quot;: &quot;MacBook, iMac, Mac Studio&quot;,
                      &quot;child&quot;: {
                        &quot;component&quot;: &quot;Icon&quot;,
                        &quot;props&quot;: {
                          &quot;name&quot;: &quot;laptop&quot;,
                          &quot;category&quot;: &quot;devices&quot;
                        }
                      }
                    }
                  },
                  &quot;rhs&quot;: {
                    &quot;component&quot;: &quot;Stats&quot;,
                    &quot;props&quot;: {
                      &quot;number&quot;: &quot;$43.0B&quot;,
                      &quot;label&quot;: &quot;10%&quot;
                    }
                  }
                }
              },
              {
                &quot;component&quot;: &quot;MiniCard&quot;,
                &quot;props&quot;: {
                  &quot;lhs&quot;: {
                    &quot;component&quot;: &quot;ProfileTile&quot;,
                    &quot;props&quot;: {
                      &quot;title&quot;: &quot;Wearables, Home &amp; Accessories&quot;,
                      &quot;label&quot;: &quot;Watch, AirPods, HomePod&quot;,
                      &quot;child&quot;: {
                        &quot;component&quot;: &quot;Icon&quot;,
                        &quot;props&quot;: {
                          &quot;name&quot;: &quot;headphones&quot;,
                          &quot;category&quot;: &quot;devices&quot;
                        }
                      }
                    }
                  },
                  &quot;rhs&quot;: {
                    &quot;component&quot;: &quot;Stats&quot;,
                    &quot;props&quot;: {
                      &quot;number&quot;: &quot;$45.0B&quot;,
                      &quot;label&quot;: &quot;11%&quot;
                    }
                  }
                }
              },
              {
                &quot;component&quot;: &quot;MiniCard&quot;,
                &quot;props&quot;: {
                  &quot;lhs&quot;: {
                    &quot;component&quot;: &quot;ProfileTile&quot;,
                    &quot;props&quot;: {
                      &quot;title&quot;: &quot;iPad&quot;,
                      &quot;label&quot;: &quot;Tablets&quot;,
                      &quot;child&quot;: {
                        &quot;component&quot;: &quot;Icon&quot;,
                        &quot;props&quot;: {
                          &quot;name&quot;: &quot;tablet&quot;,
                          &quot;category&quot;: &quot;devices&quot;
                        }
                      }
                    }
                  },
                  &quot;rhs&quot;: {
                    &quot;component&quot;: &quot;Stats&quot;,
                    &quot;props&quot;: {
                      &quot;number&quot;: &quot;$43.0B&quot;,
                      &quot;label&quot;: &quot;10%&quot;
                    }
                  }
                }
              }
            ]
          }
        },
        {
          &quot;component&quot;: &quot;Layout&quot;,
          &quot;props&quot;: {
            &quot;children&quot;: {
              &quot;variant&quot;: &quot;L-S&quot;,
              &quot;rows&quot;: [
                {
                  &quot;headerLeft&quot;: {
                    &quot;component&quot;: &quot;InlineHeader&quot;,
                    &quot;props&quot;: {
                      &quot;heading&quot;: &quot;Share of Total Revenue&quot;,
                      &quot;description&quot;: &quot;By product category&quot;
                    }
                  },
                  &quot;largeLeft&quot;: [
                    {
                      &quot;component&quot;: &quot;PieChartV2&quot;,
                      &quot;props&quot;: {
                        &quot;variant&quot;: &quot;donut&quot;,
                        &quot;chartData&quot;: {
                          &quot;header&quot;: {
                            &quot;component&quot;: &quot;InlineHeader&quot;,
                            &quot;props&quot;: {
                              &quot;heading&quot;: &quot;Product Mix (%)&quot;
                            }
                          },
                          &quot;data&quot;: [
                            {
                              &quot;category&quot;: &quot;iPhone&quot;,
                              &quot;value&quot;: 48
                            },
                            {
                              &quot;category&quot;: &quot;Services&quot;,
                              &quot;value&quot;: 21
                            },
                            {
                              &quot;category&quot;: &quot;Mac&quot;,
                              &quot;value&quot;: 10
                            },
                            {
                              &quot;category&quot;: &quot;Wearables/Home/Acc&quot;,
                              &quot;value&quot;: 11
                            },
                            {
                              &quot;category&quot;: &quot;iPad&quot;,
                              &quot;value&quot;: 10
                            }
                          ]
                        }
                      }
                    }
                  ],
                  &quot;headerRight&quot;: {
                    &quot;component&quot;: &quot;InlineHeader&quot;,
                    &quot;props&quot;: {
                      &quot;heading&quot;: &quot;Notes&quot;
                    }
                  },
                  &quot;smallRight&quot;: [
                    {
                      &quot;component&quot;: &quot;List&quot;,
                      &quot;props&quot;: {
                        &quot;variant&quot;: &quot;icon&quot;,
                        &quot;items&quot;: [
                          {
                            &quot;title&quot;: &quot;Services margin &gt; hardware&quot;,
                            &quot;subtitle&quot;: &quot;Supports profitability&quot;,
                            &quot;iconName&quot;: &quot;trending-up&quot;,
                            &quot;iconCategory&quot;: &quot;charts&quot;
                          },
                          {
                            &quot;title&quot;: &quot;iPhone cyclicality&quot;,
                            &quot;subtitle&quot;: &quot;Seasonal spikes in Q1&quot;,
                            &quot;iconName&quot;: &quot;calendar&quot;,
                            &quot;iconCategory&quot;: &quot;time&quot;
                          },
                          {
                            &quot;title&quot;: &quot;Wearables momentum&quot;,
                            &quot;subtitle&quot;: &quot;Ecosystem lock-in&quot;,
                            &quot;iconName&quot;: &quot;watch&quot;,
                            &quot;iconCategory&quot;: &quot;devices&quot;
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  &quot;headerLeft&quot;: {
                    &quot;component&quot;: &quot;InlineHeader&quot;,
                    &quot;props&quot;: {
                      &quot;heading&quot;: &quot;Quarterly Trends&quot;,
                      &quot;description&quot;: &quot;Synthetic time series ($b)&quot;
                    }
                  },
                  &quot;largeLeft&quot;: [
                    {
                      &quot;component&quot;: &quot;AreaChartV2&quot;,
                      &quot;props&quot;: {
                        &quot;type&quot;: &quot;condensedNormal&quot;,
                        &quot;variant&quot;: &quot;linear&quot;,
                        &quot;chartData&quot;: {
                          &quot;header&quot;: {
                            &quot;component&quot;: &quot;InlineHeader&quot;,
                            &quot;props&quot;: {
                              &quot;heading&quot;: &quot;Revenue by Product (Last 8 Qtrs, $b)&quot;
                            }
                          },
                          &quot;unit&quot;: &quot;b&quot;,
                          &quot;data&quot;: {
                            &quot;labels&quot;: [&quot;Q1&quot;, &quot;Q2&quot;, &quot;Q3&quot;, &quot;Q4&quot;, &quot;Q5&quot;, &quot;Q6&quot;, &quot;Q7&quot;, &quot;Q8&quot;],
                            &quot;series&quot;: [
                              {
                                &quot;category&quot;: &quot;iPhone&quot;,
                                &quot;values&quot;: [65, 39, 41, 71, 68, 40, 43, 72]
                              },
                              {
                                &quot;category&quot;: &quot;Services&quot;,
                                &quot;values&quot;: [18, 19, 20, 21, 22, 22, 23, 24]
                              },
                              {
                                &quot;category&quot;: &quot;Mac&quot;,
                                &quot;values&quot;: [10, 8, 7, 12, 11, 8, 9, 12]
                              },
                              {
                                &quot;category&quot;: &quot;Wearables/Home/Acc&quot;,
                                &quot;values&quot;: [11, 8, 7, 12, 11, 8, 8, 12]
                              },
                              {
                                &quot;category&quot;: &quot;iPad&quot;,
                                &quot;values&quot;: [9, 7, 6, 10, 9, 7, 7, 9]
                              }
                            ]
                          }
                        },
                        &quot;xAxisLabel&quot;: &quot;Quarter&quot;,
                        &quot;yAxisLabel&quot;: &quot;Revenue ($b)&quot;
                      }
                    }
                  ],
                  &quot;headerRight&quot;: {
                    &quot;component&quot;: &quot;InlineHeader&quot;,
                    &quot;props&quot;: {
                      &quot;heading&quot;: &quot;Highlights&quot;
                    }
                  },
                  &quot;smallRight&quot;: [
                    {
                      &quot;component&quot;: &quot;TagBlock&quot;,
                      &quot;props&quot;: {
                        &quot;children&quot;: [
                          {
                            &quot;text&quot;: &quot;Seasonality&quot;,
                            &quot;iconName&quot;: &quot;snowflake&quot;,
                            &quot;iconCategory&quot;: &quot;weather&quot;
                          },
                          {
                            &quot;text&quot;: &quot;Mix shift to services&quot;,
                            &quot;iconName&quot;: &quot;pie-chart&quot;,
                            &quot;iconCategory&quot;: &quot;charts&quot;
                          },
                          {
                            &quot;text&quot;: &quot;Ecosystem effects&quot;,
                            &quot;iconName&quot;: &quot;layers&quot;,
                            &quot;iconCategory&quot;: &quot;layout&quot;
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          }
        },
        {
          &quot;component&quot;: &quot;SectionBlock&quot;,
          &quot;props&quot;: {
            &quot;isFoldable&quot;: false,
            &quot;sections&quot;: [
              {
                &quot;value&quot;: &quot;assumptions&quot;,
                &quot;trigger&quot;: &quot;Assumptions&quot;,
                &quot;content&quot;: [
                  {
                    &quot;component&quot;: &quot;TextContent&quot;,
                    &quot;props&quot;: {
                      &quot;textMarkdown&quot;: &quot;- Total revenue base assumed: ~$426B\n- Percentages approximated to round numbers; values may not sum perfectly due to rounding.\n- Category definitions follow Apple&#39;s typical disclosures.&quot;
                    }
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  },
  &quot;error&quot;: null
}</content>`,
    },
  ],
  "thread-3": [
    {
      id: "msg-3-1",
      role: "user",
      content: "Help me buy headphones",
    },
    {
      id: "msg-3-2",
      role: "assistant",
      content: `<content thesys="true">{
  &quot;component&quot;: {
    &quot;component&quot;: &quot;Card&quot;,
    &quot;props&quot;: {
      &quot;children&quot;: [
        {
          &quot;component&quot;: &quot;Header&quot;,
          &quot;props&quot;: {
            &quot;title&quot;: &quot;Find the Right Headphones&quot;,
            &quot;subtitle&quot;: &quot;Tell me your preferences to get tailored picks&quot;
          }
        },
        {
          &quot;component&quot;: &quot;TextContent&quot;,
          &quot;props&quot;: {
            &quot;textMarkdown&quot;: &quot;Answer a few quick questions, and I’ll recommend the best options for you.&quot;
          }
        },
        {
          &quot;component&quot;: &quot;Layout&quot;,
          &quot;props&quot;: {
            &quot;children&quot;: {
              &quot;variant&quot;: &quot;L-S&quot;,
              &quot;rows&quot;: [
                {
                  &quot;largeLeft&quot;: [
                    {
                      &quot;component&quot;: &quot;Form&quot;,
                      &quot;props&quot;: {
                        &quot;name&quot;: &quot;headphones_requirements_form&quot;,
                        &quot;children&quot;: [
                          {
                            &quot;label&quot;: &quot;Primary use&quot;,
                            &quot;children&quot;: {
                              &quot;component&quot;: &quot;Select&quot;,
                              &quot;props&quot;: {
                                &quot;name&quot;: &quot;use_case&quot;,
                                &quot;placeholder&quot;: &quot;Choose primary use&quot;,
                                &quot;defaultValue&quot;: &quot;music&quot;,
                                &quot;children&quot;: [
                                  {
                                    &quot;component&quot;: &quot;SelectItem&quot;,
                                    &quot;props&quot;: { &quot;value&quot;: &quot;music&quot;, &quot;children&quot;: &quot;Music listening&quot; }
                                  },
                                  {
                                    &quot;component&quot;: &quot;SelectItem&quot;,
                                    &quot;props&quot;: { &quot;value&quot;: &quot;gaming&quot;, &quot;children&quot;: &quot;Gaming&quot; }
                                  },
                                  {
                                    &quot;component&quot;: &quot;SelectItem&quot;,
                                    &quot;props&quot;: { &quot;value&quot;: &quot;work&quot;, &quot;children&quot;: &quot;Work/Calls&quot; }
                                  },
                                  {
                                    &quot;component&quot;: &quot;SelectItem&quot;,
                                    &quot;props&quot;: { &quot;value&quot;: &quot;travel&quot;, &quot;children&quot;: &quot;Travel/Commute&quot; }
                                  },
                                  {
                                    &quot;component&quot;: &quot;SelectItem&quot;,
                                    &quot;props&quot;: { &quot;value&quot;: &quot;studio&quot;, &quot;children&quot;: &quot;Studio/Production&quot; }
                                  }
                                ],
                                &quot;rules&quot;: { &quot;required&quot;: true }
                              }
                            }
                          },
                          {
                            &quot;label&quot;: &quot;Form factor&quot;,
                            &quot;children&quot;: {
                              &quot;component&quot;: &quot;RadioGroup&quot;,
                              &quot;props&quot;: {
                                &quot;name&quot;: &quot;form_factor&quot;,
                                &quot;defaultValue&quot;: &quot;over_ear&quot;,
                                &quot;children&quot;: [
                                  {
                                    &quot;component&quot;: &quot;RadioItem&quot;,
                                    &quot;props&quot;: { &quot;label&quot;: &quot;Over‑ear&quot;, &quot;value&quot;: &quot;over_ear&quot; }
                                  },
                                  {
                                    &quot;component&quot;: &quot;RadioItem&quot;,
                                    &quot;props&quot;: { &quot;label&quot;: &quot;On‑ear&quot;, &quot;value&quot;: &quot;on_ear&quot; }
                                  },
                                  {
                                    &quot;component&quot;: &quot;RadioItem&quot;,
                                    &quot;props&quot;: { &quot;label&quot;: &quot;In‑ear (earbuds)&quot;, &quot;value&quot;: &quot;in_ear&quot; }
                                  }
                                ],
                                &quot;rules&quot;: { &quot;required&quot;: true }
                              }
                            }
                          },
                          {
                            &quot;label&quot;: &quot;Connection&quot;,
                            &quot;children&quot;: {
                              &quot;component&quot;: &quot;CheckBoxGroup&quot;,
                              &quot;props&quot;: {
                                &quot;name&quot;: &quot;connection_prefs&quot;,
                                &quot;children&quot;: [
                                  {
                                    &quot;component&quot;: &quot;CheckBoxItem&quot;,
                                    &quot;props&quot;: {
                                      &quot;label&quot;: &quot;Wireless (Bluetooth)&quot;,
                                      &quot;description&quot;: &quot;Convenience, travel, workouts&quot;,
                                      &quot;name&quot;: &quot;wireless_bt&quot;,
                                      &quot;defaultChecked&quot;: true
                                    }
                                  },
                                  {
                                    &quot;component&quot;: &quot;CheckBoxItem&quot;,
                                    &quot;props&quot;: {
                                      &quot;label&quot;: &quot;Wired (3.5mm/USB-C)&quot;,
                                      &quot;description&quot;: &quot;Lowest latency, consistent quality&quot;,
                                      &quot;name&quot;: &quot;wired_analog&quot;
                                    }
                                  }
                                ],
                                &quot;rules&quot;: { &quot;required&quot;: false }
                              }
                            }
                          },
                          {
                            &quot;label&quot;: &quot;Noise control&quot;,
                            &quot;children&quot;: {
                              &quot;component&quot;: &quot;RadioGroup&quot;,
                              &quot;props&quot;: {
                                &quot;name&quot;: &quot;noise_control&quot;,
                                &quot;defaultValue&quot;: &quot;anc_preferred&quot;,
                                &quot;children&quot;: [
                                  {
                                    &quot;component&quot;: &quot;RadioItem&quot;,
                                    &quot;props&quot;: { &quot;label&quot;: &quot;Active Noise Cancelling (ANC) preferred&quot;, &quot;value&quot;: &quot;anc_preferred&quot; }
                                  },
                                  {
                                    &quot;component&quot;: &quot;RadioItem&quot;,
                                    &quot;props&quot;: { &quot;label&quot;: &quot;Transparency/Awareness preferred&quot;, &quot;value&quot;: &quot;transparency&quot; }
                                  },
                                  {
                                    &quot;component&quot;: &quot;RadioItem&quot;,
                                    &quot;props&quot;: { &quot;label&quot;: &quot;No preference&quot;, &quot;value&quot;: &quot;no_pref&quot; }
                                  }
                                ]
                              }
                            }
                          },
                          {
                            &quot;label&quot;: &quot;Budget range (USD)&quot;,
                            &quot;children&quot;: {
                              &quot;component&quot;: &quot;Slider&quot;,
                              &quot;props&quot;: {
                                &quot;variant&quot;: &quot;continuous&quot;,
                                &quot;min&quot;: 20,
                                &quot;max&quot;: 600,
                                &quot;step&quot;: 10,
                                &quot;defaultValue&quot;: [100, 300],
                                &quot;name&quot;: &quot;budget_range&quot;,
                                &quot;rules&quot;: { &quot;required&quot;: true, &quot;min&quot;: 20, &quot;max&quot;: 600 }
                              }
                            }
                          },
                          {
                            &quot;label&quot;: &quot;Comfort/sound preferences (optional)&quot;,
                            &quot;hint&quot;: &quot;E.g., warm bass, neutral studio, lightweight, long battery&quot;,
                            &quot;children&quot;: {
                              &quot;component&quot;: &quot;TextArea&quot;,
                              &quot;props&quot;: {
                                &quot;name&quot;: &quot;notes&quot;,
                                &quot;rows&quot;: 3,
                                &quot;placeholder&quot;: &quot;Add any preferences…&quot;,
                                &quot;maxLength&quot;: 200
                              }
                            }
                          }
                        ],
                        &quot;buttons&quot;: {
                          &quot;component&quot;: &quot;ButtonGroup&quot;,
                          &quot;props&quot;: {
                            &quot;variant&quot;: &quot;horizontal&quot;,
                            &quot;children&quot;: [
                              {
                                &quot;component&quot;: &quot;Button&quot;,
                                &quot;props&quot;: {
                                  &quot;children&quot;: &quot;Show Recommendations&quot;,
                                  &quot;name&quot;: &quot;submit_headphones_requirements&quot;
                                }
                              }
                            ]
                          }
                        }
                      }
                    }
                  ],
                  &quot;smallRight&quot;: [
                    {
                      &quot;component&quot;: &quot;List&quot;,
                      &quot;props&quot;: {
                        &quot;heading&quot;: &quot;Tip: How to choose&quot;,
                        &quot;description&quot;: &quot;Key factors that impact your experience&quot;,
                        &quot;variant&quot;: &quot;icon&quot;,
                        &quot;items&quot;: [
                          {
                            &quot;title&quot;: &quot;Use case first&quot;,
                            &quot;subtitle&quot;: &quot;Different models excel at commute, studio, gaming, or workouts.&quot;,
                            &quot;iconName&quot;: &quot;target&quot;,
                            &quot;iconCategory&quot;: &quot;navigation&quot;
                          },
                          {
                            &quot;title&quot;: &quot;Noise cancelling&quot;,
                            &quot;subtitle&quot;: &quot;ANC helps in planes, offices; transparency keeps you aware.&quot;,
                            &quot;iconName&quot;: &quot;waves&quot;,
                            &quot;iconCategory&quot;: &quot;audio&quot;
                          },
                          {
                            &quot;title&quot;: &quot;Fit and comfort&quot;,
                            &quot;subtitle&quot;: &quot;Over‑ear for comfort, in‑ear for portability.&quot;,
                            &quot;iconName&quot;: &quot;headphones&quot;,
                            &quot;iconCategory&quot;: &quot;devices&quot;
                          },
                          {
                            &quot;title&quot;: &quot;Wired vs wireless&quot;,
                            &quot;subtitle&quot;: &quot;Wired = lowest latency; wireless = convenience and features.&quot;,
                            &quot;iconName&quot;: &quot;cable&quot;,
                            &quot;iconCategory&quot;: &quot;devices&quot;
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ]
    }
  },
  &quot;error&quot;: null
}</content>`,
    },
    {
      id: "msg-3-3",
      role: "user",
      content: "Show recommendations",
    },
    {
      id: "msg-3-4",
      role: "assistant",
      content: `<content thesys="true">{
  &quot;component&quot;: {
    &quot;component&quot;: &quot;Card&quot;,
    &quot;props&quot;: {
      &quot;children&quot;: [
        {
          &quot;component&quot;: &quot;Header&quot;,
          &quot;props&quot;: {
            &quot;title&quot;: &quot;Headphone Picks for You&quot;,
            &quot;subtitle&quot;: &quot;Over‑ear • Music • ANC • $100–$300&quot;
          }
        },
        {
          &quot;component&quot;: &quot;TextContent&quot;,
          &quot;props&quot;: {
            &quot;textMarkdown&quot;: &quot;Curated over‑ear, music‑focused models with strong ANC within your budget. Compare sound, comfort, and features.&quot;
          }
        },
        {
          &quot;component&quot;: &quot;MiniCardBlock&quot;,
          &quot;props&quot;: {
            &quot;children&quot;: [
              {
                &quot;component&quot;: &quot;MiniCard&quot;,
                &quot;props&quot;: {
                  &quot;lhs&quot;: {
                    &quot;component&quot;: &quot;ProfileTile&quot;,
                    &quot;props&quot;: {
                      &quot;title&quot;: &quot;Noise Cancelling&quot;,
                      &quot;label&quot;: &quot;Priority Feature&quot;,
                      &quot;child&quot;: { &quot;component&quot;: &quot;Icon&quot;, &quot;props&quot;: { &quot;name&quot;: &quot;waves&quot;, &quot;category&quot;: &quot;audio&quot; } }
                    }
                  },
                  &quot;rhs&quot;: { &quot;component&quot;: &quot;Stats&quot;, &quot;props&quot;: { &quot;number&quot;: &quot;ANC&quot;, &quot;label&quot;: &quot;On&quot; } }
                }
              },
              {
                &quot;component&quot;: &quot;MiniCard&quot;,
                &quot;props&quot;: {
                  &quot;lhs&quot;: {
                    &quot;component&quot;: &quot;ProfileTile&quot;,
                    &quot;props&quot;: {
                      &quot;title&quot;: &quot;Form Factor&quot;,
                      &quot;label&quot;: &quot;Over‑ear&quot;,
                      &quot;child&quot;: { &quot;component&quot;: &quot;Icon&quot;, &quot;props&quot;: { &quot;name&quot;: &quot;headphones&quot;, &quot;category&quot;: &quot;devices&quot; } }
                    }
                  },
                  &quot;rhs&quot;: { &quot;component&quot;: &quot;Stats&quot;, &quot;props&quot;: { &quot;number&quot;: &quot;$100–$300&quot;, &quot;label&quot;: &quot;Budget&quot; } }
                }
              }
            ]
          }
        },
        {
          &quot;component&quot;: &quot;CarouselV2&quot;,
          &quot;props&quot;: {
            &quot;header&quot;: { &quot;component&quot;: &quot;InlineHeader&quot;, &quot;props&quot;: { &quot;heading&quot;: &quot;Recommended Products&quot; } },
            &quot;content&quot;: [
              {
                &quot;children&quot;: [
                  { &quot;component&quot;: &quot;Image&quot;, &quot;props&quot;: { &quot;src&quot;: &quot;https://m.media-amazon.com/images/I/41tp0JPPlmL.jpg&quot;, &quot;alt&quot;: &quot;Sony WH-CH720N over-ear ANC headphones in black&quot; } },
                  { &quot;component&quot;: &quot;TextContent&quot;, &quot;props&quot;: { &quot;textMarkdown&quot;: &quot;**Sony WH‑CH720N**  \nBalanced sound, reliable ANC, lightweight comfort.  \nBattery: ~35 hrs • Multi‑Point BT • App EQ  \nPrice: ~$129–$149&quot; } },
                  { &quot;component&quot;: &quot;TagBlock&quot;, &quot;props&quot;: { &quot;children&quot;: [ { &quot;text&quot;: &quot;ANC&quot;, &quot;iconName&quot;: &quot;waves&quot;, &quot;iconCategory&quot;: &quot;audio&quot; }, { &quot;text&quot;: &quot;Multipoint&quot;, &quot;iconName&quot;: &quot;bluetooth&quot;, &quot;iconCategory&quot;: &quot;connectivity&quot; }, { &quot;text&quot;: &quot;Lightweight&quot;, &quot;iconName&quot;: &quot;feather&quot;, &quot;iconCategory&quot;: &quot;nature&quot; } ] } }
                ],
                &quot;footer&quot;: [
                  { &quot;component&quot;: &quot;Button&quot;, &quot;props&quot;: { &quot;children&quot;: &quot;Check Availability&quot;, &quot;name&quot;: &quot;cta_sony_ch720n&quot; } }
                ]
              },
              {
                &quot;children&quot;: [
                  { &quot;component&quot;: &quot;Image&quot;, &quot;props&quot;: { &quot;src&quot;: &quot;https://massdrop-s3.imgix.net/product-images/sennheiser-hd-450bt-bluetooth-5-0-wireless-headphones/FP/uuO8wT8RfKyazVqyM4Ya_pc.png&quot;, &quot;alt&quot;: &quot;Sennheiser HD 450BT over-ear headphones in white&quot; } },
                  { &quot;component&quot;: &quot;TextContent&quot;, &quot;props&quot;: { &quot;textMarkdown&quot;: &quot;**Sennheiser HD 450BT**  \nPunchy bass, closed‑back isolation, solid ANC.  \nBattery: ~30 hrs • USB‑C • Foldable  \nPrice: ~$119–$149&quot; } },
                  { &quot;component&quot;: &quot;TagBlock&quot;, &quot;props&quot;: { &quot;children&quot;: [ { &quot;text&quot;: &quot;Bass Boost&quot;, &quot;iconName&quot;: &quot;audio-lines&quot;, &quot;iconCategory&quot;: &quot;audio&quot; }, { &quot;text&quot;: &quot;USB‑C&quot;, &quot;iconName&quot;: &quot;cable&quot;, &quot;iconCategory&quot;: &quot;devices&quot; }, { &quot;text&quot;: &quot;Foldable&quot;, &quot;iconName&quot;: &quot;fold-horizontal&quot;, &quot;iconCategory&quot;: &quot;layout&quot; } ] } }
                ],
                &quot;footer&quot;: [
                  { &quot;component&quot;: &quot;Button&quot;, &quot;props&quot;: { &quot;children&quot;: &quot;Check Availability&quot;, &quot;name&quot;: &quot;cta_senn_hd450bt&quot; } }
                ]
              },
              {
                &quot;children&quot;: [
                  { &quot;component&quot;: &quot;Image&quot;, &quot;props&quot;: { &quot;src&quot;: &quot;https://m.media-amazon.com/images/I/61+WYAjltpL._AC_UF1000,1000_QL80_.jpg&quot;, &quot;alt&quot;: &quot;Anker Soundcore Life Q30 headphones on a desk&quot; } },
                  { &quot;component&quot;: &quot;TextContent&quot;, &quot;props&quot;: { &quot;textMarkdown&quot;: &quot;**Soundcore Life Q30**  \nGreat value ANC with customizable EQ.  \nBattery: ~40 hrs (ANC on) • Comfort pads  \nPrice: ~$79–$99&quot; } },
                  { &quot;component&quot;: &quot;TagBlock&quot;, &quot;props&quot;: { &quot;children&quot;: [ { &quot;text&quot;: &quot;Value Pick&quot;, &quot;iconName&quot;: &quot;star&quot;, &quot;iconCategory&quot;: &quot;social&quot; }, { &quot;text&quot;: &quot;40h Battery&quot;, &quot;iconName&quot;: &quot;battery-full&quot;, &quot;iconCategory&quot;: &quot;devices&quot; }, { &quot;text&quot;: &quot;App EQ&quot;, &quot;iconName&quot;: &quot;sliders&quot;, &quot;iconCategory&quot;: &quot;tools&quot; } ] } }
                ],
                &quot;footer&quot;: [
                  { &quot;component&quot;: &quot;Button&quot;, &quot;props&quot;: { &quot;children&quot;: &quot;Check Availability&quot;, &quot;name&quot;: &quot;cta_soundcore_q30&quot; } }
                ]
              },
              {
                &quot;children&quot;: [
                  { &quot;component&quot;: &quot;Image&quot;, &quot;props&quot;: { &quot;src&quot;: &quot;https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&amp;w=1200&amp;auto=format&amp;fit=crop&quot;, &quot;alt&quot;: &quot;JBL Live 660NC over-ear ANC headphones&quot; } },
                  { &quot;component&quot;: &quot;TextContent&quot;, &quot;props&quot;: { &quot;textMarkdown&quot;: &quot;**JBL Live 660NC**  \nLively V‑shaped tuning for energetic music.  \nBattery: ~40–50 hrs • Fast charge  \nPrice: ~$149–$199&quot; } },
                  { &quot;component&quot;: &quot;TagBlock&quot;, &quot;props&quot;: { &quot;children&quot;: [ { &quot;text&quot;: &quot;Fast Charge&quot;, &quot;iconName&quot;: &quot;zap&quot;, &quot;iconCategory&quot;: &quot;energy&quot; }, { &quot;text&quot;: &quot;V‑Tuning&quot;, &quot;iconName&quot;: &quot;equal&quot;, &quot;iconCategory&quot;: &quot;math&quot; }, { &quot;text&quot;: &quot;ANC&quot;, &quot;iconName&quot;: &quot;waves&quot;, &quot;iconCategory&quot;: &quot;audio&quot; } ] } }
                ],
                &quot;footer&quot;: [
                  { &quot;component&quot;: &quot;Button&quot;, &quot;props&quot;: { &quot;children&quot;: &quot;Check Availability&quot;, &quot;name&quot;: &quot;cta_jbl_660nc&quot; } }
                ]
              }
            ]
          }
        },
        {
          &quot;component&quot;: &quot;SectionBlock&quot;,
          &quot;props&quot;: {
            &quot;isFoldable&quot;: false,
            &quot;sections&quot;: [
              {
                &quot;value&quot;: &quot;section1&quot;,
                &quot;trigger&quot;: &quot;Compare &amp; Next Steps&quot;,
                &quot;content&quot;: [
                  {
                    &quot;component&quot;: &quot;List&quot;,
                    &quot;props&quot;: {
                      &quot;heading&quot;: &quot;Quick comparison&quot;,
                      &quot;variant&quot;: &quot;icon&quot;,
                      &quot;items&quot;: [
                        { &quot;title&quot;: &quot;Best overall ANC under $150&quot;, &quot;subtitle&quot;: &quot;Sony WH‑CH720N&quot;, &quot;iconName&quot;: &quot;award&quot;, &quot;iconCategory&quot;: &quot;social&quot; },
                        { &quot;title&quot;: &quot;Best value&quot;, &quot;subtitle&quot;: &quot;Soundcore Life Q30&quot;, &quot;iconName&quot;: &quot;badge-dollar-sign&quot;, &quot;iconCategory&quot;: &quot;finance&quot; },
                        { &quot;title&quot;: &quot;Bass lovers&quot;, &quot;subtitle&quot;: &quot;Sennheiser HD 450BT&quot;, &quot;iconName&quot;: &quot;waves&quot;, &quot;iconCategory&quot;: &quot;audio&quot; }
                      ]
                    }
                  },
                  {
                    &quot;component&quot;: &quot;TextContent&quot;,
                    &quot;props&quot;: {
                      &quot;textMarkdown&quot;: &quot;Want a tighter price band or different tuning? Tell me your preferred price within $100–$300 or whether you like warm, balanced, or neutral sound.&quot;
                    }
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  },
  &quot;error&quot;: null
}</content>`,
    },
  ],
};
