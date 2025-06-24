
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trash2, Activity } from "lucide-react"
import { useSymptoms } from "@/contexts/symptoms-context"
import { bodyParts } from "@/utils/data/body-parts"

export const SelectedSymptomsPanel: React.FC<{}> = () => {
  const { state, dispatch } = useSymptoms()

  if (state.selectedSymptoms.length === 0) {
    return (
      <Card className="mt-6">
        <CardContent className="p-6 text-center">
          <Activity className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">Click on body parts to select symptoms</p>
        </CardContent>
      </Card>
    )
  }

  const groupedSymptoms = state.selectedSymptoms.reduce(
    (acc, selected) => {
      const bodyPart = bodyParts.find((bp) => bp.id === selected.bodyPart)
      if (bodyPart) {
        if (!acc[bodyPart.name]) {
          acc[bodyPart.name] = []
        }
        acc[bodyPart.name].push(selected)
      }
      return acc
    },
    {} as Record<string, typeof state.selectedSymptoms>,
  )

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "mild":
        return "bg-green-100 text-green-800"
      case "moderate":
        return "bg-yellow-100 text-yellow-800"
      case "severe":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="mt-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">Selected Symptoms ({state.selectedSymptoms.length})</CardTitle>
          <Button variant="outline" size="sm" onClick={() => dispatch({ type: "RESET_SYMPTOMS" })}>
            <Trash2 className="h-4 w-4 mr-2" />
            Clear All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {Object.entries(groupedSymptoms).map(([bodyPartName, symptoms]) => (
            <div key={bodyPartName}>
              <h3 className="font-semibold text-gray-900 mb-2">{bodyPartName}</h3>
              <div className="space-y-2 pl-4">
                {symptoms.map((selected, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{selected.symptom.name}</span>
                      <Badge className={getSeverityColor(selected.symptom.severity)}>{selected.symptom.severity}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {state.selectedSymptoms.length >= 2 && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800 font-medium">Ready for Treatment Recommendations</p>
            <p className="text-xs text-blue-600 mt-1">
              You have selected {state.selectedSymptoms.length} symptoms. Get personalized treatment recommendations.
            </p>
            <Button className="mt-3 bg-blue-600 hover:bg-blue-700" onClick={() => dispatch({ type: "GO_TO_RESULTS" })}>
              Get Treatment Recommendations
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
