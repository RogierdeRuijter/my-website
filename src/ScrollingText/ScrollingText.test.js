import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ScrollingText from "./ScrollingText";
import { act } from "react-dom/test-utils";

describe("ScrollingText", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    window.HTMLMediaElement.prototype.play = () => {
      /* do nothing */
    };
  });

  afterEach(() => {
    act(() => jest.runAllTimers());
    jest.useRealTimers();
  });

  const testFishRaceFlow = () => {
    const firstSentence_1 = screen.getByText(
      "Gemaakt in een avond vol met drank door Daniel en mij"
    );
    expect(firstSentence_1).toBeInTheDocument();
    expect(firstSentence_1).toHaveClass("active-text");

    const secondSentence_1 = screen.getByText(
      "Later verfijnd door de mensen die hiervoor genoemd zijn en Joost"
    );
    expect(secondSentence_1).toBeInTheDocument();
    expect(secondSentence_1).toHaveClass("next-text");

    act(() => jest.advanceTimersByTime(5500));

    const secondSentence_2 = screen.getByText(
      "Later verfijnd door de mensen die hiervoor genoemd zijn en Joost"
    );
    expect(secondSentence_2).toBeInTheDocument();
    expect(secondSentence_2).toHaveClass("active-text");

    const thirdSentence_2 = screen.getByText(
      "Bedankt jongens voor de eindeloze discussies over de essentie van de Fish race"
    );
    expect(thirdSentence_2).toBeInTheDocument();
    expect(thirdSentence_2).toHaveClass("next-text");

    act(() => jest.advanceTimersByTime(9500 - 5500));

    const thirdSentence_3 = screen.getByText(
      "Bedankt jongens voor de eindeloze discussies over de essentie van de Fish race"
    );
    expect(thirdSentence_3).toBeInTheDocument();
    expect(thirdSentence_3).toHaveClass("active-text");

    act(() => jest.advanceTimersByTime(14000 - 9500));

    const thirdSentence_4 = screen.getByText(
      "Bedankt jongens voor de eindeloze discussies over de essentie van de Fish race"
    );
    expect(thirdSentence_4).toBeInTheDocument();
    expect(thirdSentence_4).toHaveClass("previous-text");
  };

  it("should show the fish race description in order", () => {
    render(<ScrollingText project="fish-race" />);

    const firstSentence_0 = screen.getByText(
      "Gemaakt in een avond vol met drank door Daniel en mij"
    );
    expect(firstSentence_0).toBeInTheDocument();
    expect(firstSentence_0).toHaveClass("next-text");

    userEvent.click(screen.getByRole("button", { name: "Play" }));

    testFishRaceFlow();
  });

  it("should be able to restart the fish race description when after it ends", () => {
    render(<ScrollingText project="fish-race" />);

    const firstSentence_0 = screen.getByText(
      "Gemaakt in een avond vol met drank door Daniel en mij"
    );
    expect(firstSentence_0).toBeInTheDocument();
    expect(firstSentence_0).toHaveClass("next-text");

    userEvent.click(screen.getByRole("button", { name: "Play" }));

    testFishRaceFlow();

    userEvent.click(screen.getByRole("button", { name: "Play" }));

    testFishRaceFlow();
  });
});
