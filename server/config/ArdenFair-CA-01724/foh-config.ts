import { Config } from "../../../src/app/config/config.model";
import { FOHlayouts } from "./foh-layouts";
import { FOHprogression, FOHratingCriteria } from "./foh-progression";

export var FOHConfig: Config = {
  client: {
    destinationId: "frontOfHouse",
    destinationName: "Front of House",
    progression: FOHprogression,
    layoutGeneration : FOHlayouts,
    defaultLayoutTimes: [ 11, 14, 17 ],
    suggestedLayoutTimes: [ 9, 11, 17, 21, 22 ],
  },
  server: {
    // Schedule Id's for: Training, Leadership, and Front of House
    schedulesToTranscript: [ 1048200344, 1048200342, 1048200348 ],
    shifts: {
      neverShort: {
        jobIds: [ 1048200358 ], // HS FOH General JobId
      }
    }
  },
  training: {
    ratingCriteria: FOHratingCriteria,
  }
}
