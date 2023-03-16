import {
  ColorMode,
  extendTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import type { ComponentStyleConfig } from "@chakra-ui/theme";

const Input = {
  baseStyle: ({ colorMode }: { colorMode: ColorMode }) => ({
    field: {
      borderStyle: "solid",
      borderWidth: "2px",
      border: "2px solid",
      borderColor: "gray.900",
      _focus: {
        outline: "2px solid",
        outlineColor: "gray.900",
      },
      backgroundColor: colorMode === "dark" ? "gray.900" : "gray.50",
    },
  }),
  sizes: {},
  defaultProps: {
    variant: null,
  },
};

const Divider: ComponentStyleConfig = {
  baseStyle: {
    borderColor: "primary",
    borderWidth: "2px",
  },
};

export const theme = extendTheme(
  {
    semanticTokens: {
      colors: {
        error: "red.500",
        primary: {
          default: "gray.800",
          _dark: "gray.200",
        },
      },
    },
    components: {
      // Input,
      NumberInput: Input,
      Divider,
      Button: {
		variants: {
			'solid-red-samesound': {
				bg: "#f70035",
				color: "#fff",
				fontWeight: "600",
				fontSize: "14px",
				_hover: {
				bg: "#de0030",
				color: "#fff",
				},
			},
			'solid-shadow-button': {
				bg: "#e2e8f0",
				_hover: {
				bg: "#cbd5e0",
				},
			},
			'share-vk': {
				bg: "#45668e",
				color: "#fff",
				_hover: {
				bg: "#3d5a7d",
				color: "#fff",
				},
			},
			'share-tg': {
				bg: "#0088cc",
				color: "#fff",
				_hover: {
				bg: "#0077b3",
				color: "#fff",
				},
			},
			'share-fb': {
				bg: "#1877f2",
				color: "#fff",
				_hover: {
				bg: "#0d6ae4",
				color: "#fff",
				},
			},
			'share-tw': {
				bg: "#1da1f2",
				color: "#fff",
				_hover: {
				bg: "#0d95e8",
				color: "#fff",
				},
			},
			'share-ok': {
				bg: "#ed812b",
				color: "#fff",
				_hover: {
				bg: "#eb7314",
				color: "#fff",
				},
			},
			'share-em': {
				bg: "#ea4335",
				color: "#fff",
				_hover: {
				bg: "#e82e1e",
				color: "#fff",
				},
			},
			'share-ma': {
				bg: "#168de2",
				color: "#fff",
				_hover: {
				bg: "#147fcb",
				color: "#fff",
				},
			},
			'share-ws': {
				bg: "#25d366",
				color: "#fff",
				_hover: {
				bg: "#21bd5c",
				color: "#fff",
				},
			},
			'outline-clear': {
				bg: "#fff9fa",
				border: "1px solid #ff617a",
				fontWeight: "500",
				_hover: {
				bg: "#ff617a",
				border: "1px solid #ff617a",
				color: "#fff",
				},
			},
			'ghost-shadow': {
				bg: "#edf2f7",
				fontWeight: "500",
				marginTop: "10px",
				_hover: {
				bg: "#e2e8f0",
				},
			},
			'outline-delete-editor': {
				bg: "transparent",
				_hover: {
				bg: "#ff617a",
				color: "#fff",
				},
			},
			'footer-vk': {
				bg: "#45668e",
				color: "#fff",
				borderRadius: "50%",
				borderBottom: "none",
				minWidth: "30px",
				_hover: {
				bg: "#3d5a7d",
				color: "#fff",
				},
			},
			'footer-tg': {
				bg: "#0088cc",
				color: "#fff",
				borderRadius: "50%",
				borderBottom: "none",
				minWidth: "30px",
				_hover: {
				bg: "#0077b3",
				color: "#fff",
				},
			},
		},
	  },
      Link: {
		variants: {
			'link-social': {
				borderBottom: "none",
				_hover: {
				borderBottom: "none",
				},
			},
		},
        baseStyle: ({ colorMode }: { colorMode: ColorMode }) => ({
          color: colorMode === "dark" ? "blue.400" : "blue.600",
          fontWeight: "600",
		  borderBottom: "1px solid #bed0ea",
		  _hover: {
			color: "#f70035",
			borderBottom: "1px solid #f6b4bc",
			textDecoration: "none",
		   },
        }),
      },
    },
    fonts: {
      heading: `'IBM Plex Serif', serif`,
      body: `'IBM Plex Sans', sans-serif`,
    },
    styles: {
      global: () => ({
        html: {
          fontSize: "16px",
        },
      }),
    },
  },
  withDefaultColorScheme({
    colorScheme: "gray",
  })
);
