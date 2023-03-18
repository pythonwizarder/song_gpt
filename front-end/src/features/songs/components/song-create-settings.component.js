import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  Modal,
  IconButton,
  Icon,
  Popover,
  Pressable,
  Text,
  HStack,
  VStack,
  Box,
  Button,
} from "native-base";
import { defaultSystemMessage } from "src/features/songs/components/default-system-message.js";

export const SongCreateSettings = ({ systemMessage, setSystemMessage }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <IconButton
        ml={3}
        size={"sm"}
        icon={
          <Icon
            ml={3}
            size={"sm"}
            as={Ionicons}
            color="gray.400"
            name="settings"
          />
        }
        onPress={() => setIsOpen(true)}
      />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Content width={"95%"} maxWidth={992}>
          <Modal.Header>
            <Popover
              trigger={(triggerProps) => {
                return (
                  <VStack space={1}>
                    <HStack flex={1} space={"xs"} alignItems="center">
                      <Text fontSize={"md"} fontWeight="semibold">
                        Prompt Engineering
                      </Text>
                      <Pressable {...triggerProps}>
                        <Box
                          borderRadius={"full"}
                          bg={{
                            linearGradient: {
                              end: [1, 0],
                              start: [0, 0],
                              colors: ["#1982FC", "#316dca"],
                            },
                          }}
                        >
                          <Icon
                            size="sm"
                            as={Ionicons}
                            color="lightText"
                            name="information-outline"
                          />
                        </Box>
                      </Pressable>
                    </HStack>
                    <Text fontSize={"2x"}>
                      We pass the <Text italic>prompt</Text> below to ChatGPT
                      before sending your input. We still haven't found the
                      optimal <Text italic>prompt</Text> so feel free to modify
                      this one and have some fun with it.
                    </Text>
                  </VStack>
                );
              }}
            >
              <Popover.Content mx={5} maxWidth={500}>
                <Popover.Header key="header">
                  <Text fontWeight={"semibold"}>
                    What is this Prompt Engineering?
                  </Text>
                </Popover.Header>
                <Popover.Body key="body">
                  <Text mx={5} color="gray.700" fontWeight={"normal"}>
                    Prompt engineering involves crafting and refining the input
                    prompts to optimize the output generated by the language
                    model. LLMs are trained on large datasets and can generate
                    high-quality text in response to specific prompts. However,
                    the quality of the output can vary depending on the prompt
                    provided. Therefore, prompt engineering involves selecting
                    the right prompts, refining them, and experimenting with
                    different variations to improve the quality and relevance of
                    the generated text.
                  </Text>
                </Popover.Body>
              </Popover.Content>
            </Popover>
          </Modal.Header>
          <Modal.Body>
            <VStack space={3}>
              <textarea
                rows={10}
                style={{
                  padding: 10,
                }}
                // logic
                value={systemMessage}
                maxLength={2500}
                onChange={(e) => setSystemMessage(e.target.value)}
              />
              {systemMessage != defaultSystemMessage && (
                <Button
                  variant={"ghost"}
                  colorScheme="white"
                  onPress={() => setSystemMessage(defaultSystemMessage)}
                >
                  Reset
                </Button>
              )}
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};
