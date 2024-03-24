import React from 'react';
import { CardDetails, CardHeader, DueText, StyledCard } from "./BusCardStyled";
import {BusService} from "../../utilities/types";

interface Props {
    bus: BusService;
}

const BusCard: React.FC<Props> = ({ bus }) => {
    const renderArrivalTime = () => {
        if (bus.minutesUntilArrival <= 1) {
            return <DueText isDue>{'Due'}</DueText>;
        } else {
            return `${bus.minutesUntilArrival} mins`;
        }
    };

    return (
        <StyledCard>
            <CardHeader>
                <b>{bus.busId}</b>
            </CardHeader>
            <CardDetails due={false}>
                <div>{bus.destination}</div>
                <div>
                    {renderArrivalTime()}
                </div>
            </CardDetails>
        </StyledCard>
    );
};

export default BusCard;
